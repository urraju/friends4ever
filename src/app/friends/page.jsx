"use client";
import Link from "next/link";
import "./card.modules.css";
import HeaderContent from "@/shared/HeaderContent/HeaderContent";
import useAxios from "@/hooks/useAxios";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import SkeletonLoader from "@/shared/Loading/SkeletonLoader";

const Page = () => {
  const [open, setOpen] = useState(8);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const axiosPublic = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/friends`);
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
    <section>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto mt-[130px]">
        {/* Heading content component */}
        <HeaderContent
          heading={"Every Friends List"}
          subHeading={"We are all friends so will you friendship with us.!!"}
        />
        {/* Main content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:gap-5">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <SkeletonLoader key={index} />
            ))
          ) : (
            data.slice(0, open).map((item) => (
              <div key={item._id} className="card relative">
                <Link className="card1" href="">
                  <p className="absolute bottom-10 border-l-2 text-sm backdrop-blur px-3 py-1 text-white rounded border-[#FEA833] bg-[#FEA833] bg-opacity-30 right-8">
                    {item.Name}
                  </p>
                  <img
                    className="imgHover h-80 w-96 object-cover rounded-lg"
                    src={item.profileImg}
                    alt="ProfileImg"
                  />
                  <Link className="go-corner" href={`/friends/${item._id}`}>
                    <button className="go-arrow">→</button>
                  </Link>
                </Link>
              </div>
            ))
          )}
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="capitalize border text-white font-cinzel bg-[#7532D4] py-2 px-6 rounded"
            onClick={() => setOpen()}
          >
            see all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page;
