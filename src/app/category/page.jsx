import Category from "@/components/Category/Category";
import useAxios from "@/hooks/useAxios";
import HeaderContent from "@/shared/HeaderContent/HeaderContent";

const CategoryPage = async () => {
  const axiosPublic = useAxios();
  const response = await axiosPublic.get("/category");
  const allCategory = response.data;

  return (
    <div className="max-w-screen-2xl mx-auto mt-[130px]">
      <HeaderContent
        heading="Categories"
        subHeading="Every categories ways get story."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {allCategory.map((item) => (
          <Category key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default CategoryPage;
