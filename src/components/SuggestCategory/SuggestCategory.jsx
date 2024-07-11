import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const SuggestCategory = async () => {
  const axiosPublic = useAxios();
  const response = await axiosPublic.get("/stories");
  const data = await response.data;

  const categoryColors = {
    love: "#FF6F61",
    travel: "#4A90E2",
    wedding: "#FF69B4",
    friendship: "#FFD700",
    life: "#32CD32",
    sad: "#696969",
  };

  const getCategoryColor = (category) => {
    return categoryColors[category] || "#000000";
  };

  const getHoverClass = (category) => {
    return `button-hover-${category}`;
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item._id}>
            {/* main card  */}
            <div className="rounded-md shadow hover:drop-shadow-md transition-all duration-300 p-1 space-y-3">
              <div className="box-2">
                <img
                  className="rounded-md h-52 object-cover w-full"
                  src={item.story_image}
                  alt={item.story_name}
                />
              </div>
              <div className="px-1">
                <div className="flex justify-between items-center">
                  <p
                    className="capitalize"
                    style={{ color: getCategoryColor(item.category) }}
                  >
                    {item.category}
                  </p>
                  <Link href={`/category/categoryStory/${item._id}`}>
                    <button
                      className={`flex items-center gap-1 text-[12px] font-medium font-cinzel  hover:text-white transition-all text-black duration-500 px-2 py-1 ${getHoverClass(
                        item.category
                      )}`}
                    >
                      Read All
                      <IoIosArrowRoundForward className="text-lg " />
                    </button>
                  </Link>
                </div>
                <p className="text-sm text-[#696969] py-2">
                  {item.story_des.slice(0, 61)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestCategory;
