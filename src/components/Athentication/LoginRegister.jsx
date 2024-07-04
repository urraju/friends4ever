"use client";
import React, { useState } from "react";
import "./auth.modules.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import SocialLogin from "./SocialLogin";
import useAxios from "@/hooks/useAxios";
import { useForm } from "react-hook-form";
// Ensure you import the CSS file for your styles
//  images hostion
const NEXT_PUBLIC_HOSTINGKEY = process.env.NEXT_PUBLIC_HOSTINGKEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${NEXT_PUBLIC_HOSTINGKEY}`;
//  images hostion
const LoginRegister = () => {
  const { signIn, createUser,userUpdateProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const axiosPublic = useAxios();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        if (res.user) {
          toast.success("Login successful");
        }
      })
      .catch((error) => {
        toast.error(error.message); // Ensure to use the error message
      });
  };

  // resigtation function
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    if (data.password.length < 6) {
      toast.error("Password should be 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      toast.error(
        "Your password should have at least one uppercase character."
      );
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await axiosPublic.post(images_hosting_api, formData);

      if (res.data.success) {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const profileImg = res.data.display_url;

        const userCredential = await createUser(email, password);
        await userUpdateProfile(userCredential.user,{
          displayName: name,
          photoURL: profileImg,
        });

        const userInfo = {
          name: name,
          email: email,
          password: password,
          profileImg: profileImg,
          role: "user",
        };

        const userRes = await axiosPublic.post("/users", userInfo);
        if (userRes.data.result) {
          reset();
          toast.success("Registration successful");
        }
      }
    } catch (error) {
      toast.error(error.message); // Use error.message to display the error message
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto flex justify-center items-center h-[700px]">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              {" "}
              <input
                className="input"
                type={open ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setOpen(!open)}
                className="absolute top-3 right-3"
              >
                {open ? (
                  <FaEye className="text-lg text-[#000000d0]"></FaEye>
                ) : (
                  <FaEyeSlash className="text-lg text-[#000000b9]"></FaEyeSlash>
                )}
              </span>
            </div>
            <button type="submit">Log in</button>
            <div className="w-full flex justify-center">
              {" "}
              <SocialLogin />
            </div>
          </form>
        </div>

        <div className="register">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
            />
            <div className="relative">
              {" "}
              <input
                {...register("password", { required: true })}
                type={open ? "text" : "password"}
                placeholder="Password"
              />
              <span
                onClick={() => setOpen(!open)}
                className="absolute top-3 right-3"
              >
                {open ? (
                  <FaEye className="text-lg text-[#000000d0]"></FaEye>
                ) : (
                  <FaEyeSlash className="text-lg text-[#000000b9]"></FaEyeSlash>
                )}
              </span>
            </div>
            <input
              {...register("image")}
              type="file"
              className="input-file my-3"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
