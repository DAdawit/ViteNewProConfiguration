// src/hooks/useAdminSectionRedirect.js
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const useAdminSectionRedirect = (basePath, tabs) => {
  const navigate = useNavigate();
  const location = useLocation();

  const userPermissions = useSelector(
    (state) => state?.userPermission?.userPermissions
  )?.map((p) => p.code_name);

  useEffect(() => {
    if (location.pathname !== basePath) return;

    const firstAllowed = tabs.find((tab) =>
      tab.perms.length === 0
        ? true
        : tab.perms.some((p) => userPermissions.includes(p))
    );

    if (firstAllowed && firstAllowed.path !== basePath) {
      navigate(firstAllowed.path, { replace: true });
    }
  }, [location.pathname, basePath, navigate, userPermissions, tabs]);
};
