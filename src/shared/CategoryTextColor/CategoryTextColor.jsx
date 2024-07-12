const CategoryTextColor = ({ text, textSize }) => {
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
    <div>
      <p
        className={`text-gray-500 mb-2  capitalize`}
        style={{ color: getCategoryColor(text), fontSize: `${textSize}` }}
      >
        {text}
      </p>
    </div>
  );
};
export default CategoryTextColor;
