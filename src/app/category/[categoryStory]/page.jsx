
const CategoryStory = async ({params}) => {
     // data fetching
  const res = await fetch(`http://localhost:8000/stories/${params.categoryStory}`, {
    cache: "no-store",
  });
  const data = await res.json();
  
    return(
        <div>
             <p> HELLO I Am page </p>
        </div>
    )}
export default CategoryStory;