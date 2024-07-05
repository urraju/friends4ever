import Link from "next/link";
import "./category.modiule.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Category = ({ data }) => {
  return (
    <div className=" rounded-md shadow">
      <div className="box">
        <img className="h-72 w-[500px] object-cover rounded-md" src={data.img} alt="" />
        <div className="content flex justify-center items-center">
          <button className=" flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider transition-all duration-500 border px-4 py-1 rounded border-gray-400">
            {" "}
            <Link href={`/seestory/${data.category}`}>See Story</Link>
            <IoIosArrowRoundForward className="text-lg" />
          </button>
        </div>
      </div>
      <p className="mt-2 py-2 border-l-2 px-2 font-medium rounded-b-md border-[#7336d1]">{data.name}</p>
    </div>
  );
};
export default Category;
