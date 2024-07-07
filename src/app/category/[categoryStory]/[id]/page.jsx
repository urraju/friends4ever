"use client";
import { useEffect, useState } from "react";

const StoryDetails = async ({ params}) => {
  const { id } = params;
  console.log(id);
  const res = await fetch(
    `http://localhost:8000/stories/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 border rounded shadow">
      <h1 className="text-3xl font-bold mb-2">{data.story_name}</h1>
      <img
        src={data.story_image}
        alt={data.story_name}
        className="w-full h-80 object-cover rounded mb-4"
      />
      <p className="text-gray-500 mb-4">{data.category}</p>
      <p>{data.story_des}</p>
    </div>
  );
};

export default StoryDetails;
