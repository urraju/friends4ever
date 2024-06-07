import Link from "next/link";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

const HeaderBanner = ({ heading }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div
        className=" z-30 relative rounded-lg"
        style={{
          backgroundImage: `url('https://i.ibb.co/mv1K6zT/friends4ever.jpg')`,
          backgroundPosition: `center`,
          backgroundSize: "cover",
          height: "300px", // Ensure the image covers the container
        }}
      >
        <div className="absolute h-full -z-30 w-full rounded-lg bg-black/40"></div>
        <div className="absolute h-full -z-30 w-full rounded-lg opacity-80 bg-gradient-to-b to-black from-[#7532d422]"></div>
        {/* main content */}
        <div className="z-30 flex justify-center items-center h-full ">
          <div className="space-y-3">
            <h1 className="text-[#FEA833] text-4xl font-cinzel font-semibold">
              {heading}
            </h1>
            <p className="text-white font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              tempore hic eos officiis <br /> tenetur commodi aut laborum sit
              dolores pariatur?
            </p>
            {/* button home  */}
            <div className="absolute top-0">
              <Link href="/">
                <button className="flex font-cinzel rounded text-sm text-white font-medium items-center justify-center backdrop-blur bg-opacity-30 hover:tracking-wide bg-[#FEA833] px-3 py-1 gap-2 transition-all ease-in duration-300">
                  <RiArrowLeftDoubleFill className="text-lg " />
                  Go Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBanner;
