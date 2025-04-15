import { useState, useEffect } from "react";

export function localStorageFetch(array) {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(array)) || [];
    setData(storedData);
    isLoading(false);
  }, [array]);

  return { data, loading };
}
