import SuggestCategory from "@/components/SuggestCategory/SuggestCategory";
import HeaderBanner from "@/shared/HeaderBanner/HeaderBanner";

const StoryDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:8000/stories/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!data) {
    return <p>Loading...</p>;
  }

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

  return (
    <section className="mt-2">
      <HeaderBanner heading="Every story details page" />
      <div className="max-w-screen-2xl mx-auto mt-2 grid grid-cols-12 gap-5 ">
        <div className="p-2 rounded-md shadow-md col-span-7">
          <h1 className="text-xl font-bold mb-2">{data.story_name}</h1>
          <img
            src={data.story_image}
            alt={data.story_name}
            className="w-full h-80 object-cover rounded-md mb-4"
          />
          <p
            className="text-gray-500 mb-2 text-xl capitalize"
            style={{ color: getCategoryColor(data.category) }}
          >
            {data.category}
          </p>
          <p className="text-gray-500 mb-4 leading-relaxed">{data.story_date}</p>
          <p>{data.story_des}</p>
        </div>

        {/* second part i mean right site */}
        <div className="col-span-5  rounded-md ">
          {/* suggesiton data */}
          <p className="text-xl font-bold mb-2">All Category</p>
            <SuggestCategory/>
        </div>
      </div>
    </section>
  );
};

export default StoryDetails;
