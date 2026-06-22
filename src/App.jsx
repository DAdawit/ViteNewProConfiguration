import { Routes, Route, Navigate } from "react-router-dom";
import MyLayout from "./InternalComponents/MyLayout";
import LoginForm from "./pages/LoginForm";
import CreateNewPassword from "./pages/CreateNewPassword";
import NewResetPassword from "./pages/NewResetPassword";
import { Toaster } from "sonner";
import Dashboard from "./InternalComponents/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import useAppStore from "./Store/useAppStore";
import handleJwtExpiration from "./utils/session-expiration";
import ProtectedRoutes from "./InternalComponents/common/ProtectedRoutes";
import Home from "./pages/Home";

function App() {
  const language = useAppStore((state) => state.language);
  const [token, setToken] = useState(sessionStorage.getItem("tID"));
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  useEffect(() => {
    if (token) handleJwtExpiration(token);
  }, [token]);
  useEffect(() => {
    // Check if theme exists in localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (theme) {
      setTheme(theme);
    }
  }, [setTheme]); // setTheme is stable from Zustand store
  const updateToken = (newToken) => {
    sessionStorage.setItem("tID", newToken);
    setToken(newToken);
  };

  return (
    <div
      style={{
        "--font-brand-sans":
          language === "en" ? "Poppins" : "'Noto Sans Ethiopic', sans-serif",
        "--font-brand-serif":
          language === "en" ? "Gelasio" : "'Noto Serif Ethiopic', serif",
      }}
    >
      <Toaster className="dark:bg-black dark:text-white" />

      <Routes>
        <Route
          path="/login"
          element={<LoginForm updateToken={updateToken} />}
        />

        <Route path="/forgot_password" element={<NewResetPassword />} />
        <Route
          path="/reset_password/:id/:token"
          element={<CreateNewPassword />}
        />
        <Route element={<ProtectedRoutes token={token} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
