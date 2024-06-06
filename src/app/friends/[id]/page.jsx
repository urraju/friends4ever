import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";

const DetailsPage = async ({ params }) => {
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
    <div className="">
      <div className="my-5">
        <HeaderBanner heading={"Every Firends Details Page"} />
      </div>
      <div className="max-w-screen-2xl relative mx-auto flex items-center ">
        <div className="flex-1">
          <img
            className="hover:animate-pulse transition-all duration-300 w-[500px] h-[550px] object-cover hover:-z-50 rounded-lg"
            src={data.profileImg}
            alt=""
          />
        </div>

        <div className="h-96 bg-gradient-to-tl to-[#7532D4] from-[#FEA833] left-[42%] w-[2px] absolute"></div>

        <div className="flex-1 space-y-3">
            <p className="text-3xl font-semibold text-[#FEA833]">{Name}</p>
            <p><span>Age - </span>{age}</p>
            <p><span>Passion - </span>{passion}</p>
            <p>{myselfDescription}</p>
            <p><span>Home - </span>{home}</p>
            <p><span>Thana - </span>{thana}</p>
            <p><span>Zela - </span>{zela}</p>

        </div>
      </div>
    </div>
  );
};
export default DetailsPage;
