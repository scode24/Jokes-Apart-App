import axios from "axios";

const useApiCaller = () => {
  const call = async (url, method, payload, loadingMessage) => {
    try {
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
    }
  };

  return { call };
};

export default useApiCaller;
