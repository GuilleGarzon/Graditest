import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(URL) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(URL);
      console.log("🚀 ~ file: useFetch.js ~ line 14 ~ fetchData ~ response", response)
      setData(response.data);
    };

    fetchData()
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [URL]);

  return { data, loading, error };
}
