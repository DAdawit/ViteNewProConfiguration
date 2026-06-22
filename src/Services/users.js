// api calls related to users
import apiRequest from "@/utils/request";
import axios from "axios";

export const fetchUsers2 = async () => {
  try {
    // const response = await axios.get("https://httpbin.org/status/500");
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return {
      users: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (error) {
    const isServerError = !error.response || error.response.status >= 500;
    return {
      users: [],
      error: error.response?.data || {
        message: "An unexpected error occurred",
      },
      loading: false,
      serverError: isServerError,
    };
  }
};
