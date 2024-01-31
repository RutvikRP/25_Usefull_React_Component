import { useEffect, useState } from "react";
function useFetch(api) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(api);
      const data = await res.json();
      console.log(data);
      if (data) {
        setLoading(false);
        setData(data);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [api]);

  return [data, loading, error];
}

export default useFetch;
