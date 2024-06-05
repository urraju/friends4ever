
const page = async ({params}) => {
    console.log(params);
    const res = await fetch(`http://localhost:8000/friends/${params.id}`, {cache : 'no-cache'})
    const data = await res.json()
    console.log(data);
    return(
        <div>
             <img
                className="imgHover h-80 w-96 object-cover hover:-z-50 rounded-lg"
                src={data.profileImg}
                alt=""
              />
             <p>{data.Name}</p>
             im
             
        </div>
    )}
export default page;