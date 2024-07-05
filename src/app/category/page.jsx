import useAxios from "@/hooks/useAxios";
import HeaderContent from "@/shared/HeaderContent/HeaderContent";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
 
const CategoryPage = async () => {
  const axiosPublic = useAxios();
  const response = await axiosPublic.get("/category");
  const allCategory = response.data;
  console.log(allCategory);
  return (
    <div className="max-w-screen-2xl mx-auto mt-[130px]">
      <HeaderContent
        heading="Categories"
        subHeading="Every categories ways get story."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allCategory?.map((data) => (
          <div key={data._id}>
            <div className=" rounded-md shadow">
              <div className="box">
                <img
                  className="h-72 w-[500px] object-cover rounded-md"
                  src={data.img}
                  alt=""
                />
                <div className="content flex justify-center items-center">
                  <button className=" flex items-center gap-1 text-[12px] font-light font-cinzel hover:tracking-wider transition-all duration-500 border px-4 py-1 rounded border-gray-400">
                    {" "}
                    <Link href={`/category/${data.category}`}>See Story</Link>
                    <IoIosArrowRoundForward className="text-lg" />
                  </button>
                </div>
              </div>
              <p className="mt-2 py-2 border-l-2 px-2 font-medium rounded-b-md border-[#7336d1]">
                {data.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryPage;
