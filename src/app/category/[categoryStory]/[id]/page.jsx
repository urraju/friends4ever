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

  return (
    <section className="mt-2">
      <HeaderBanner heading="Every story details page" />
      <div className="max-w-screen-2xl mx-auto mt-2 grid grid-cols-12 gap-5 ">
        <div className="p-5 border rounded-md shadow col-span-7">
          <h1 className="text-xl font-bold mb-4">{data.story_name}</h1>
          <img
            src={data.story_image}
            alt={data.story_name}
            className="w-full h-80 object-cover rounded mb-4"
          />
          <p className="text-gray-500 mb-2">{data.category}</p>
          <p className="text-gray-500 mb-4">{data.date}</p>
          <p>{data.story_des}</p>
        </div>

        {/* second part i mean right site */}
        <div className="col-span-5 border rounded-md">

        </div>
      </div>
    </section>
  );
};

export default StoryDetails;
