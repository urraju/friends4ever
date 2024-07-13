import friends from "@/assets/all-img/others/man.png";
import shape from "@/assets/all-img/others/footer-shape2.png";
import Button2 from "@/shared/Button/Button2";
import ShareButton from "@/shared/Button/ShareButton";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-background h-[800px] overflow-hidden z-0 relative bg-cover bg-no-repeat bg-bottom">
      {/* gradient background color  */}
      <div className="absolute h-full w-full -z-30 opacity-60 bg-gradient-to-t from-black to-black"></div>
      <div className="absolute h-full w-full opacity-70 -z-30 bg-gradient-to-b to-black from-[#7532d433]"></div>

      {/* banner content  */}
      <div className="max-w-screen-2xl relative h-[800px] mx-auto flex flex-col md:flex-row items-center justify-center  md:px-0 px-1">
        <div className="relative  text-center space-y-8">
          <h1 className="md:text-5xl text-2xl font-semibold text-white">
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

          <div className="flex items-center gap-6 justify-center ">
            <ShareButton>
              <Link href="/addStory">Add Story +</Link>
            </ShareButton>
            <Button2>See Story</Button2>
          </div>
          {/* 
          <div className="  bg-gradient-to-tr opacity-10 from-[#FEA833] to-[#7532D4] w-[600px] h-[600px] absolute rounded-full -top-40 -left-20 blur-3xl -z-30"></div> */}
        </div>

        {/* <div>
          <Image src={friends} alt="friends" />
        </div> */}
      </div>
      <div className="absolute w-full opacity-20 right-0 bottom-0 object-cover animate-pulse">
        <Image src={shape} alt="shape" />
      </div>
    </div>
  );
};

export default Banner;
