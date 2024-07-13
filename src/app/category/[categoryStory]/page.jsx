"use client";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../CategoryStory.modules.css";
import useAllCategory from "@/hooks/useAllCategory";
import SkeletonLoad from "@/shared/Loading/SkeletonLoad";

const CategoryStory = ({ params }) => {
  const { categoryStory } = params;
  const { data, loading, error } = useAllCategory(categoryStory);

  const categoryColors = {
    love: ["#FF6F61", "#FF8C94"],
    travel: ["#4A90E2", "#5AC8FA"],
    wedding: ["#FF69B4", "#FFB6C1"],
    friendship: ["#FFD700", "#FFFACD"],
    life: ["#32CD32", "#7FFF00"],
    sad: ["#696969", "#A9A9A9"],
  };

  const getCategoryColor = (category) => {
    return categoryColors[category] || ["#000000", "#333333"];
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 mt-[130px]">
        {loading
          ? Array.from({ length:  data.length || 8 }).map((_, index) => (
              <SkeletonLoad key={index} />
            ))
          : data.map((item) => {
              const [startColor, endColor] = getCategoryColor(item.category);
              return (
                <div className="category-card" key={item._id}>
                  <div className="card space-y-3 shadow p-2">
                    <div>
                      <img
                        className="rounded-md object-cover w-full h-60"
                        src={item.story_image}
                        alt={item.story_name}
                      />
                    </div>
                    <div className="description">
                      <p className="text-balance">
                        {item.story_des.slice(0, 205)}...
                      </p>
                    </div>
                    <div
                      className="pl-1 flex justify-between items-center rounded"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${startColor}, ${endColor})`,
                      }}
                    >
                      <p className="text-white font-cinzel text-sm">
                        {item.story_name}
                      </p>
                      <button className="flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider rounded-r bg-black/20 transition-all duration-500 px-2 py-1 text-white hover:bg-black/50">
                        <Link href={`/category/categoryStory/${item._id}`}>
                          Read All
                        </Link>
                        <IoIosArrowRoundForward className="text-lg " />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default CategoryStory;
