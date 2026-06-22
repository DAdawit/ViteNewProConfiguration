import { create } from "zustand";
import apiRequest from "@/utils/request";

const useUserPermissionsStore = create((set, get) => ({
  // State
  permissions: [],
  loading: false,
  error: null,
  isServerError: false,
  hasFetched: false,

  /**
   * Fetch the current user's resolved permission list from the server.
   * Endpoint: GET /perm_api/get_self_perm
   * The backend resolves group + addPrms – restrictedPrms and returns
   * [{ code_name, name, category }] for the requester.
   */
  fetchUserPermissions: async () => {
    const { loading } = get();
    // Avoid duplicate inflight requests
    if (loading) return;

    set({ loading: true, error: null, isServerError: false });

    await apiRequest
      .get("/perm_api/get_self_perm", {
        headers: {
          get_selfperm_api: import.meta.env.VITE_APP_GET_SELFPERM_API,
        },
      })
      .then((res) => {
        set({
          permissions: res?.data || [],
          loading: false,
          hasFetched: true,
        });
      })
      .catch((err) => {
        const isServer = !err.response || err.response.status >= 500;
        set({
          permissions: [],
          loading: false,
          error: err.message || "Failed to fetch permissions",
          isServerError: isServer,
          hasFetched: true,
        });
      });
  },



  /**
   * Clear permissions (useful on logout or org switch).
   */
  clearPermissions: () =>
    set({
      permissions: [],
      loading: false,
      error: null,
      isServerError: false,
      hasFetched: false,
    }),
}));

export default useUserPermissionsStore;
