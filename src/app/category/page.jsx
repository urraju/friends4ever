"use client";
import useAxios from "@/hooks/useAxios";
import CategoryTextColor from "@/shared/CategoryTextColor/CategoryTextColor";
import HeaderContent from "@/shared/HeaderContent/HeaderContent";
import SkeletonLoader from "@/shared/Loading/SkeletonLoader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CategoryPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/category`);
        const data = res.data;
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto my-[130px]">
      <HeaderContent
        heading="Categories"
        subHeading="Every categories ways get story."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {loading
          ? Array.from({ length: data.length || 6 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          : data?.map((data) => (
              <div key={data._id}>
                <div className="rounded-2xl shadow p-2">
                  <div className="box">
                    <img
                      className="h-72 w-[500px] object-cover "
                      src={data.img}
                      alt=""
                    />
                    <div className="content flex justify-center items-center">
                      <button className=" flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider transition-all duration-500 border px-4 py-1 rounded border-gray-400">
                        {" "}
                        <Link href={`/category/${data.category}`}>
                          See Story
                        </Link>
                        <IoIosArrowRoundForward className="text-lg" />
                      </button>
                    </div>
                  </div>
                  <p className="my-2 font-medium rounded-b-md ">
                    <CategoryTextColor text={data.category} textSize={"20px"} />
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
export default CategoryPage;
