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
  const { signIn,createUser } = useAuth();
  const [open, setOpen] = useState(false);
  const axiosPublic = useAxios();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password).then((res) => {
      try {
        if (res.user.result) {
          return toast.success("Login successfull");
        }
      } catch (error) {
        return toast.error(error);
      }
    });
  };
  // resigtation function
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    if (data.password.length < 6) {
      setSuccess("password should be 6 carecter or longer");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      setSuccess(
        "your password should have at least one upuer case caracters."
      );
      return;
    }

    const fromImages = { image: data.image[0] };
    const res = await axiosPublic.post(images_hosting_api, fromImages, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      setImgLoader(false);

      const name = data.name;
      const email = data.email;
      const password = data.password;
      const profileImg = res?.data?.data?.display_url;
      const role = "users";

      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photoURL,
          }).then(() => {
            const userInfo = {
              name,
              email,
              profileImg,
              role,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data?.result) {
                reset();
                // navigate(location?.state ? location?.state : "/");
                toast.success("Resigtation successfull");
              }
            });
          });
        })
        .catch((error) => {
          toast.error(error?.messsage);
        });
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
