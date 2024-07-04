import Link from "next/link";
import "./card.modules.css";
import HeaderContent from "@/shared/HeaderContent/HeaderContent";
import useAxios from "@/hooks/useAxios";

const page = async () => {
  const axiosPublic = useAxios();

  const response = await axiosPublic.get("/friends");
  const allFriends = response.data;

  return (
    <div className="max-w-screen-2xl mx-auto mt-[130px]">
      {/* heading content components */}
      <HeaderContent
        heading={"Every Friends List"}
        subHeading={"We are all friends so will you friendship with us.!!"}
      />
      {/* main content under  */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:gap-5">
        {allFriends.map((item) => (
          <div key={item._id} class="card relative">
            <Link class="card1" href="">
              <p className="absolute bottom-10 border-l-2 text-sm backdrop-blur px-3 py-1 text-white rounded border-[#FEA833] bg-[#FEA833] bg-opacity-30 right-8">
                {item.Name}
              </p>
              <img
                className="imgHover h-80 w-96 object-cover  rounded-lg"
                src={item.profileImg}
                alt="ProfileImg"
              />
              <Link className="go-corner" href={`/friends/${item._id}`}>
                <button className="go-arrow">→</button>
              </Link>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
