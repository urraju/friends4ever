import Link from "next/link";

const ShowFriends = ({ data }) => {
  const {
    _id,
    profileImg,
    Name,
    age,
    passion,
    home,
    thana,
    zela,
    myselfDescription
  } = data;

  return (
    <div>
      <div>
        <img className="h-80 w-96 object-cover" src={profileImg} alt="" />
        <p>{Name}</p>
        <p>Age: {age}</p>
        <p>Passion: {passion}</p>
        <p>Home: {home}</p>
        <p>Thana: {thana}</p>
        <p>Zela: {zela}</p>
        <p>Description: {myselfDescription}</p>
        <Link href={`/friends/${_id}`}>
          <button className="bg-yellow-500 rounded px-6 py-2 text-white">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowFriends;
