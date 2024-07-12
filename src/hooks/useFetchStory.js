"use client";
import { useState, useEffect } from "react";
import useAxios from "./useAxios";

const useFetchStory = (id) => {
  const axiosPublic = useAxios();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/stories/${id}`);
        const data = res.data;
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

export default useFetchStory;
