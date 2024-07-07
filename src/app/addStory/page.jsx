"use client";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import ShareButton from "@/shared/Button/ShareButton";
import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";
import { LuCheck } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const NEXT_PUBLIC_HOSTINGKEY = process.env.NEXT_PUBLIC_HOSTINGKEY;
const imagebb_hosting_api = `https://api.imgbb.com/1/upload?key=${NEXT_PUBLIC_HOSTINGKEY}`;
const AddStory = () => {
  const [submitLoader, setSubmitLoader] = useState(false);
  const [storyName, setStoryName] = useState("");
  const [storyDes, setStoryDes] = useState("");
  const axiosPublic = useAxios();
  const { register, handleSubmit, reset, watch } = useForm();
  // Watch for changes in the input value
  const storyNameValue = watch("storyName");
  const storyDesValue = watch("storyDes");
  useEffect(() => {
    setStoryName(storyNameValue);
    setStoryDes(storyDesValue);
  }, [storyNameValue, storyDesValue]);

  const onSubmit = async (data) => {
    setStoryName(data.storyName);
    setStoryImg(data.image);
    setSubmitLoader(true);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imagebb_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      setSubmitLoader(false);
      const storyInfo = {
        story_name: data.storyName,
        category: data.storyType,
        story_date: data.storyDate,
        story_image: res.data?.data?.display_url,
        story_des: data.storyDes,
        like: 0,
        // user_name: user?.displayName,
        // user_email: user?.email,
        // user_img: user?.photoURL,
      };
      const story = await axiosPublic.post("/stories", storyInfo);
      console.log(story.data);
      if (story.data.success) {
        toast.success("Story adding successfull");
      }
      reset();
    }
  };
  return (
    <div className="mt-2">
      <HeaderBanner heading="Add your favourite story" />
      <div className="max-w-screen-2xl flex justify-center items-center mx-auto bg-gradient-to-tr h-max py-20 from-[#FEA833] to-[#7532D4] rounded-lg mt-2">
        <div className="border border-white border-opacity-50 backdrop-blur bg-black/20 w-full md:w-1/2 rounded-lg -z-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* input number 1  */}
            <div className="flex items-center gap-5 p-5">
              <label className="relative flex flex-1 flex-col text-white text-sm font-light">
                Story Name
                <input
                  className="w-full bg-transparent py-1  border-b outline-none focus:border-[#08b5ff] transition-all duration-500 "
                  type="text"
                  {...register("storyName", { required: true })}
                />
                {storyName && (
                  <span className="absolute  bottom-2 right-2 w-[18px] h-[18px] rounded-full bg-[#08b5ff] text-white flex items-center justify-center">
                    <LuCheck />
                  </span>
                )}
              </label>
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Story Type
                <select
                  className="w-full hover:border-[#08b5ff] transition-all duration-500 bg-transparent text-[#08b5ff] py-1 border-b outline-none"
                  {...register("storyType", { required: true })}
                >
                  <option value="life">Life</option>
                  <option value="love">Love</option>
                  <option value="travel">Travel</option>
                  <option value="wedding">Wedding</option>
                  <option value="friendship">Friendship</option>
                  <option value="sad">Sad</option>
                </select>
              </label>
            </div>
            {/* input number 2  */}

            <div className="flex items-center gap-5 p-5">
              {/* label 1 */}
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Date
                <input
                  className=" w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "
                  type="date"
                  {...register("storyDate", { required: true })}
                />
              </label>
              {/* label 2 */}
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                <input
                  className="input-file w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "
                  type="file"
                  {...register("image", { required: true })}
                />
              </label>
            </div>
            {/* input number 3  */}
            <div className="flex items-center gap-5 p-5">
              {/* label one  */}
              <label className="relative flex flex-1 flex-col text-white text-sm font-light">
                Story Description
                <textarea
                  {...register("storyDes", { required: true })}
                  className="w-full bg-transparent py-1  border-b outline-none focus:border-[#08b5ff] transition-all duration-500 "
                ></textarea>
                {storyDes && (
                  <span className="absolute  bottom-2 right-2 w-[18px] h-[18px] rounded-full bg-[#08b5ff] text-white flex items-center justify-center">
                    <LuCheck />
                  </span>
                )}
              </label>
            </div>

            <div
              className={`flex justify-center items-center gap-5 p-5 ${
                submitLoader ? "animate-pulse" : "animate-none"
              } `}
            >
              <ShareButton isLoading>
                {submitLoader ? `Waiting...` : "Submit Story"}{" "}
              </ShareButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddStory;
