"use client";
import { FcGoogle } from "react-icons/fc";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { google } = useAuth();

  const axiosPublic = useAxios();
  const handleGoogle = () => {
    google().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        profileImg: result.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        if (res.data.result) {
          toast.success("Login successfull!");
        }
      });
    });
  };

  return (
    <div>
      <div
        onClick={handleGoogle}
        className=" h-8 cursor-pointer flex justify-center items-center w-8  rounded-full bg-gray-200 "
      >
        <FcGoogle className="text-[#FEA833] text-xl" />
      </div>
    </div>
  );
};
export default SocialLogin;
