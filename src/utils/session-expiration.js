import apiRequest from "./request";

const extractJwtExpiration = (token) => {
  try {
    if (!token) return null;
    const payload = JSON.parse(atob(token?.split(".")[1]));
    return payload?.exp * 1000;
  } catch {
    return null;
  }
};

const logout = async (e) => {
  e?.preventDefault();

  try {
    const token = sessionStorage.getItem("tID");
    await apiRequest
      .get(`/user_api/logout_user`, {
        headers: {
          GET_LGUSER_API: import.meta.env.VITE_APP_GET_LGUSER_API,
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        sessionStorage.clear();
        window.location.href = "/login";
      })
      .catch(() => {
        sessionStorage.clear();
        window.location.href = "/login";
      });
  } catch {
    sessionStorage.clear();
    window.location.href = "/login";
  }
};

const handleJwtExpiration = (token) => {
  if (!token) return;

  const expiration = extractJwtExpiration(token);
  if (expiration) {
    const remainingTime = expiration - Date.now();

    if (remainingTime > 1000) {
      setTimeout(logout, remainingTime);
    }
  }
};

export default handleJwtExpiration;
