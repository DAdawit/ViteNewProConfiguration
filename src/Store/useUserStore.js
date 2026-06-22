import { create } from "zustand";
import apiRequest from "@/utils/request";
import { jwtDecode } from "jwt-decode";

const useUserStore = create((set) => ({
  // State
  user: {},
  isServerError: false,

  // API Action - Fetch User Data
  fetchUser: async () => {
    const token = sessionStorage.getItem("tID");
    set({ loading: true, error: null });
    const userInfo = jwtDecode(token);
    const userId = userInfo?.user?.id;
    try {
      await apiRequest
        .get(`/user_api/get_single_usr_check/${userId}`, {
          headers: {
            GET_USR_API: import.meta.env.VITE_APP_GET_USR_API,
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          set({ user: response.data, loading: false });
        })
        .catch((error) => {
          console.log(error.response);
          set({ user: {}, loading: false });
        });
    } catch (error) {
      set({
        isServerError: !error.response || error.response.status >= 500,
        error: error.message || "Failed to fetch users",
        loading: false,
      });
      throw error;
    }
  },

  setUser: (data) => {
    set({ user: data, loading: false });
  },
}));

export default useUserStore;
