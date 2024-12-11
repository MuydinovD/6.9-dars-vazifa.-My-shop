import { useState, useEffect } from "react";

export function useFache(url) {
  const [data, setData] = useState(null);
  const [isPanding, setIsPanding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const featchData = async () => {
      setIsPanding(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        isPanding(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIsPanding(false);
      }
    };
    featchData();
  }, [url]);
  return { data, isPanding, error };
}
