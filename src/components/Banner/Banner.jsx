import addingStory from "@/assets/all-img/addingStory.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="bg-background h-[800px] overflow-hidden z-30 relative bg-cover bg-no-repeat bg-bottom ">
      <div className="absolute h-full w-full -z-30  bg-black/50"></div>
      <div className="max-w-screen-2xl h-[800px] mx-auto flex flex-col md:flex-row items-center justify-between  md:px-0 px-1">
        <div className="flex-1 space-y-3 relative mt-24">
          <h1 className="md:text-5xl text-2xl font-semibold text-white  leading-snug">
            {" "}
            If you want to add your life{" "}
            <span className="text-[#FEA833]">story</span> <br /> than click
            under the button{" "}
          </h1>
          <p className="text-white font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            soluta quisquam <br /> perferendis cum rem inventore laudantium
            nobis odio cupiditate ea voluptas labore, <br /> sed possimus eos
            sint quae delectus minus dicta.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-white bg-[#7532D4] px-6 py-2 rounded hover:animate-pulse text-lg">
              Add Story +
            </button>
            <button className="border rounded px-6 py-2 border-[#FEA833] text-[#FEA833] text-lg hover:animate-pulse">
              See Story
            </button>
          </div>

          <div className="  bg-gradient-to-tr opacity-40 from-[#FEA833] to-[#7532D4] w-[600px] h-[600px] absolute rounded-full -top-40 -left-20 blur-3xl -z-30"></div>
        </div>

        <div className="   relative">
          <Image className="z-50 " src={addingStory} alt="addingStory" />

          <div className=" animation bg-gradient-to-tr opacity-80 from-[#FEA833]   w-[600px] h-[600px] absolute rounded-full top-0 blur-3xl -z-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
