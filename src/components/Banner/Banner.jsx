import friends from "@/assets/all-img/man.png";
import Button2 from "@/shared/Button/Button2";
import ShareButton from "@/shared/Button/ShareButton";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-background h-[900px] overflow-hidden z-30 relative bg-cover bg-no-repeat bg-bottom ">
      <div className="absolute h-full w-full -z-30  bg-black/40"></div>
      <div className="absolute h-full w-full opacity-80 -z-30 bg-gradient-to-b to-black from-[#7532d422]"></div>
      <div className="max-w-screen-2xl h-[800px] mx-auto flex flex-col md:flex-row items-center justify-center  md:px-0 px-1">
        <div className="flex-1 space-y-5 relative mt-24">
          <h1 className="md:text-5xl text-2xl font-semibold text-white   leading-loose">
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

          <div className="flex items-center gap-6 ">
            <ShareButton><Link href='/addstory'>Add Story +</Link></ShareButton>
            <Button2>See Story</Button2>
          </div>

          <div className="  bg-gradient-to-tr opacity-10 from-[#FEA833] to-[#7532D4] w-[600px] h-[600px] absolute rounded-full -top-40 -left-20 blur-3xl -z-30"></div>
        </div>

        <div>
          <Image src={friends} alt="friends" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
