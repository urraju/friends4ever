const HeaderContent = ({ heading, subHeading }) => {
    return (
      <div className="md:w-96 border-b-2 border-[#FEA833] text-center mx-auto space-y-3 my-16 uppercase">
        {/* Gradient Text */}
        <p className="text-transparent bg-clip-text bg-gradient-to-r to-[#FEA833] from-[#7532D4] text-4xl font-semibold mb-2">
          {heading}
        </p>
        {/* Subheading */}
        <p className="text-lg inline-block  text-gray-600">
          {subHeading}
        </p>
      </div>
    );
  };
  export default HeaderContent;
  