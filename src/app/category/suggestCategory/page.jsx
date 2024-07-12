"use client";
import { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";
import CategoryTextColor from "@/shared/CategoryTextColor/CategoryTextColor";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const SuggestCategory = () => {
  const axiosPublic = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/stories");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getHoverClass = (category) => {
    return `button-hover-${category}`;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div key={item._id}>
            {/* main card */}
            <div className="rounded-md shadow hover:drop-shadow-md transition-all duration-300 p-1 space-y-3">
              <div className="box-2">
                <img
                  className="rounded-md h-52 object-cover w-full"
                  src={item.story_image}
                  alt={item.story_name}
                />
              </div>
              <div className="px-1">
                <div className="flex justify-between items-center w-full">
                  <p>
                    <CategoryTextColor text={item.category} textSize={"16px"} />
                  </p>
                  <Link href={`/category/categoryStory/${item._id}`}>
                    <button
                      className={`flex items-center gap-1 text-[12px] font-medium font-cinzel hover:text-white transition-all text-black duration-500 px-2 py-1 ${getHoverClass(
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
