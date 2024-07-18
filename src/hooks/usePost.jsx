import axios from "axios";
import { useState, useEffect } from "react";

export const usePost = (requestConfig) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  axios.defaults.baseURL = "http://localhost:3000";
  useEffect(() => {
    axios
      .request(requestConfig)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { response, error, loading };
};
