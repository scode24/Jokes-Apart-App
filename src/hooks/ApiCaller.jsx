import axios from "axios";
import useLoaderDataStore from "../stores/LoaderDataStore";

const useApiCaller = () => {
  const { setMessage } = useLoaderDataStore();

  const call = async (url, method, payload, loadingMessage) => {
    try {
      setMessage(loadingMessage);
      let response;
      url = process.env.REACT_APP_N8N_BASE_API + url;
      if (method === "get") {
        response = await axios.get(url, { params: payload });
      } else if (method === "post") {
        response = await axios.post(url, payload);
      }
      return response.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "An error occurred";
      console.error("API Error:", err);
      alert(errorMessage);
      throw err;
    } finally {
      setMessage(undefined);
    }
  };

  return { call };
};

export default useApiCaller;
