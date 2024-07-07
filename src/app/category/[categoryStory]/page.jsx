import Navbar from "@/components/Navbar/Navbar";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../CategoryStory.modules.css"; // Create this CSS file for styles

const CategoryStory = async ({ params }) => {
  // data fetching
  const res = await fetch(
    `http://localhost:8000/stories/${params.categoryStory}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-[130px]">
        {data.map((item) => (
          <div className="category-card" key={item._id}>
            <Card isFooterBlurred className="card w-full rounded-t-md">
              <CardHeader className="absolute z-10 top-1 flex-col items-start px-2">
                <p className="text-tiny text-white/60 uppercase font-bold">
                  New
                </p>
              </CardHeader>
              <img
                className="  h-56 rounded-t-md w-full"
                src={item.story_image}
                alt="storyImg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between px-2 text-white">
                <div>
                  <p className="text-white font-cinzel">{item.story_name}</p>
                  <p className="text-white font-cinzel">{item.category}</p>
                </div>
                <button className=" flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider bg-black/30 transition-all duration-500 border px-2 py-1 rounded border-gray-400 hover:bg-black/50">
                  <Link href={`/category/categoryStory/${item._id}`}>Read All</Link>
                  <IoIosArrowRoundForward className="text-lg " />
                </button>
              </CardFooter>
            </Card>
            <div className="description w-full py-4 shadow rounded-b-md">
              <p className="text-sm text-balance  px-1">
                {item.story_des.slice(0, 220)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryStory;
