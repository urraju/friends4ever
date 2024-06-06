import Link from "next/link";
import "./card.modules.css";
const page = async () => {
  const res = await fetch("http://localhost:8000/friends", {
    cache: "no-store",
  });
  const allFriends = await res.json();

  return (
    <div>
      <p>All Friends : {allFriends.length}</p>
      <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 md:gap-5">
        {allFriends.map((item) => (
          <div class="card relative">
            <Link class="card1" href="#">
              <p className="absolute bottom-10 border-l-2 text-sm backdrop-blur px-3 py-1 text-white rounded border-[#FEA833] bg-[#FEA833] bg-opacity-30 right-8">
                {item.Name}
              </p>
              <img
                className="imgHover h-80 w-96 object-cover  rounded-lg"
                src={item.profileImg}
                alt=""
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
