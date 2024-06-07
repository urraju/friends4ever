import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";

const DetailsPage = async ({ params }) => {
  // data fetching
  const res = await fetch(`http://localhost:8000/friends/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  const {
    profileImg,
    Name,
    age,
    passion,
    home,
    thana,
    zela,
    myselfDescription,
  } = data;
  return (
    <div className=" px-2">
      {/* heading img content components  */}
      <div className="my-5">
        <HeaderBanner heading={"Every Firends Details Page"} />
      </div>
      {/* main div content */}
      <div className="max-w-screen-2xl flex-col md:flex-row relative mx-auto flex items-center my-5">
        <div className="flex-1">
          <img
            className="hover:animate-pulse transition-all duration-300 w-[500px] h-[500px] object-cover hover:-z-50 rounded-lg"
            src={profileImg}
            alt=""
          />
        </div>
        {/* create shadow on img  */}
        <div className="md:h-96 w-60 h-[2px] bg-gradient-to-tl to-[#7532D4] from-[#FEA833] bottom-[41%] md:bottom-[10%]  md:left-[42%] md:w-[2px] absolute"></div>
        {/* details text content  */}
        <div className="flex-1 space-y-3 mt-8 md:mt-0">
          <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7532D4] to-[#FEA833] ">
            {Name}
          </p>
          <p className="font-medium text-lg">
            <span className="font-medium ">Age - </span>
            {age}
          </p>
          <p className="font-medium text-lg">
            <span className="font-medium ">Passion - </span>
            {passion}
          </p>
          <p>{myselfDescription}</p>
          <p className="font-medium text-lg">
            <span className="font-medium ">Home - </span>
            {home}
          </p>
          <p className="font-medium text-lg">
            <span className="font-medium ">Thana - </span>
            {thana}
          </p>
          <p className="font-medium text-lg">
            <span className="font-medium ">Zela - </span>
            {zela}
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
