'use client'
import { useEffect, useState } from "react";

const firends = () => {
  const [allFriends, setAllFriends] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/friends").then((data) => setAllFriends(data));
  }, []);
  return allFriends
  
};
export default firends;
