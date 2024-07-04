"use client";
import useAxios from "@/hooks/useAxios";
import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const image_hosting_key = process.env.NEXT_PUBLIC_HOSTINGKEY;
const imagebb_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddStory = () => {
  const axiosPublic = useAxios();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imagebb_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const productInfo = {
        story_name: data.storyName,
        product_image: res.data.data.display_url,

        like: 0,
        description: data.storyDes,
      };
      const product = await axiosSecure.post("/postProduct", productInfo);
      console.log(product.data);
      if (product.data.insertedId) {
        toast.success("Story add successfull");
      }
      reset();
    }
  };
  return (
    <div className="mt-2">
      <HeaderBanner heading="Add your favourite story" />
      <div className="max-w-screen-2xl flex justify-center items-center mx-auto bg-gradient-to-tr h-max py-20 from-[#FEA833] to-[#7532D4] rounded-lg mt-2">
        <div className="backdrop-blur bg-black/20 w-full md:w-1/2 rounded-lg -z-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* input number 1  */}
            <div className="flex items-center gap-5 p-5">
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Story Name
                <input
                  className="w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "
                  type="text"
                  {...register("storyName", { required: true })}
                />
              </label>
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Story Type
                <select
                  className="w-full hover:border-[#08b5ff] transition-all duration-500 bg-transparent text-[#08b5ff] py-1 border-b outline-none"
                  {...register("storyType", { required: true })}
                >
                  <option value="life story">Life Story</option>
                  <option value="love story">Love Story</option>
                  <option value="travel story">Travel Story</option>
                  <option value="wedding story">Wedding Story</option>
                  <option value="friendship story">Friendship Story</option>
                  <option value="sad story">Sad Story</option>
                </select>
              </label>
            </div>
            {/* input number 2  */}

            <div className="flex items-center gap-5 p-5">
              {/* label 1 */}
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Date
                <input
                  className="w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "
                  type="date"
                  {...register("storyDate", { required: true })}
                />
              </label>
              {/* label 2 */}
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Story picture
                <input
                  className="w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "
                  type="file"
                  {...register("storyImg", { required: true })}
                />
              </label>
            </div>
            {/* input number 3  */}
            <div className="flex items-center gap-5 p-5">
              {/* label one  */}
              <label className="flex flex-1 flex-col text-white text-sm font-light">
                Story Description
                <textarea {...register("storyDes", { required: true })} className="w-full bg-transparent py-1  border-b outline-none hover:border-[#08b5ff] transition-all duration-500 "></textarea>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddStory;
