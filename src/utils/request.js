import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

// Request interceptor to add the latest token to every request
apiRequest.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("tID");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle global errors (like 401 Unauthorized)
apiRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // If we get a 401 and it's not the login request, clear session and redirect
    if (
      error.response?.status === 401 &&
      !error.config.url.includes("/login_user")
    ) {
      sessionStorage.clear();
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default apiRequest;

