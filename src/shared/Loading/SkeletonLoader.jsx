// components/SkeletonLoader.js

const SkeletonLoader = () => {
  return (
    <div className="">
      <div className="animate-pulse p-2 space-y-3 shadow">
        <div className="bg-gray-300 h-32 w-full rounded-md"></div>
        <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
