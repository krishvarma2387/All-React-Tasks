import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (param) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = process.env.REACT_APP_ACCESS_KEY;

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios.get(url, {
        params: { client_id: apiKey },
      });
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param, apiKey]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
