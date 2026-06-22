import { create } from "zustand";
import apiRequest from "@/utils/request";

const usePermissionStore = create((set) => ({
  // State
  permissions: [],
  totalPermissions: 0,
  currentPage: 1,
  totalPages: 0,
  loading: false,
  deleteLoadingId: null,
  error: null,
  isServerError: false,

  // Fetch paginated permissions with filters
  fetchPermissions: async ({
    page = 1,
    sort = -1,
    name = "",
    status = "",
    category = "",
  } = {}) => {
    set({ loading: true, error: null });
    try {
      const token = sessionStorage.getItem("tID");

      const queryParams = new URLSearchParams();
      queryParams.append("page", page);
      queryParams.append("sort", sort);
      if (name) queryParams.append("name", name);
      if (status && status !== "all") queryParams.append("status", status);
      if (category) queryParams.append("category", category);

      const response = await apiRequest.get(
        `/perm_api/get_perms?${queryParams.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GALLPERM_API: import.meta.env.VITE_APP_GET_GALLPERM_API,
          },
        },
      );

      const { permissions, totalPermissions, currentPage, totalPages } =
        response.data;
      set({
        permissions,
        totalPermissions,
        currentPage,
        totalPages,
        loading: false,
      });
    } catch (error) {
      set({
        isServerError: !error.response || error.response.status >= 500,
        error: error.message || "Failed to fetch permissions",
        loading: false,
      });
      throw error;
    }
  },

  // Fetch all permissions without pagination
  fetchAllPermissions: async () => {
    set({ loading: true, error: null });
    try {
      const response = await apiRequest.get(`/perm_api/get_all_perms`, {
        headers: {
          GET_GALLPERM_API: import.meta.env.VITE_APP_GET_GALLPERM_API,
        },
      });

      const permissions = response.data;
      set({
        permissions,
        loading: false,
      });
    } catch (error) {
      set({
        isServerError: !error.response || error.response.status >= 500,
        error: error.message || "Failed to fetch permissions",
        loading: false,
      });
      throw error;
    }
  },

  // Create a new permission
  createPermission: async (permData) => {
    set({ loading: true });
    try {
      const token = sessionStorage.getItem("tID");
      const response = await apiRequest.post(
        "/perm_api/create_perm",
        permData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_CRPERM_API: import.meta.env.VITE_APP_GET_CRPERM_API,
          },
        },
      );
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  // Update an existing permission
  updatePermission: async (id, permData) => {
    set({ loading: true });
    try {
      const token = sessionStorage.getItem("tID");
      const response = await apiRequest.put(
        `/perm_api/update_perms/${id}`,
        permData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_UPDPERM_API: import.meta.env.VITE_APP_GET_UPDPERM_API,
          },
        },
      );
      set({ loading: false });
      return response.data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  // Reset store
  clearPermissions: () => {
    set({
      permissions: [],
      totalPermissions: 0,
      currentPage: 1,
      totalPages: 0,
      loading: false,
      error: null,
      isServerError: false,
    });
  },
}));

export default usePermissionStore;
