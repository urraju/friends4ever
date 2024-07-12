"use client";
import { useState, useEffect } from "react";
import useAxios from "./useAxios";

const useAllCategory = (categoryStory) => {
  const axiosPublic = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(
          `/stories/categoryStory/${categoryStory}`
        );
        const data = res.data;
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryStory]);

  return { data, loading, error };
};

export default useAllCategory;
