import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../CategoryStory.modules.css"; // Create this CSS file for styles

const CategoryStory = async ({ params }) => {
  const { categoryStory } = params;
  const res = await fetch(
    `http://localhost:8000/stories/categoryStory/${categoryStory}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-[130px]">
        {data.map((item) => (
          <div className="category-card">
            <div className="card space-y-3 shadow p-2">
              <div className="">
                <img
                  className="rounded-md object-cover w-full h-full"
                  src={item.story_image}
                  alt={item.story_name}
                />
              </div>
              <div className="description">
                <p className="text-balance">
                  {item.story_des.slice(0, 205)}...
                </p>
              </div>
              {/* button  */}
              <div className="pl-1 flex justify-between items-center bg-gradient-to-r to-[#FEA833] from-[#7532D4] rounded">
                <p className="text-white font-cinzel">{item.story_name}</p>

                <button className="flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider rounded-r bg-black/20 transition-all duration-500   px-2 py-1  text-white  hover:bg-black/50">
                  <Link href={`/category/categoryStory/${item._id}`}>
                    Read All
                  </Link>
                  <IoIosArrowRoundForward className="text-lg " />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryStory;
