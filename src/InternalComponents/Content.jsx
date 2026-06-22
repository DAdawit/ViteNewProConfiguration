import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { languageTranslate } from "@/utils/data";
import useAppStore from "@/Store/useAppStore";
import useUserPermissionsStore from "@/Store/UserPermissionsStore";
import Dashboard from "./Dashboard/Dashboard";
import ServerError from "./common/ServerError";
import FallbackComponent from "./common/FallbackComponent";
import { sidebarLinks } from "@/utils/data";
import { getFirstAllowedUrl } from "@/utils/checkPermission";
import useUserStore from "@/Store/useUserStore";
import { useMemo } from "react";

const CategoryRedirect = ({ category }) => {
  const user = useUserStore((state) => state.user);
  const permissions = useUserPermissionsStore((state) => state.permissions);
  const permissionCodes = useMemo(
    () => permissions?.map((p) => p?.code_name) || [],
    [permissions],
  );
  const isSuperAdmin = user?.isSuperAdmin === "yes";

  const firstUrl = useMemo(() => {
    const categoryLinks = sidebarLinks.navMain.filter(
      (link) => link.category === category,
    );
    return getFirstAllowedUrl(categoryLinks, permissionCodes, isSuperAdmin);
  }, [category, permissionCodes, isSuperAdmin]);

  if (!firstUrl) return <Navigate to="/dashboard" replace />;

  return <Navigate to={firstUrl} replace />;
};

const Content = () => {
  const language = useAppStore((state) => state.language);
  const loading = useUserPermissionsStore((state) => state.loading);
  const isServerError = useUserPermissionsStore((state) => state.isServerError);
  const hasFetched = useUserPermissionsStore((state) => state.hasFetched);
  const fetchUserPermissions = useUserPermissionsStore(
    (state) => state.fetchUserPermissions,
  );

  useEffect(() => {
    if (!hasFetched) {
      fetchUserPermissions();
    }
  }, [fetchUserPermissions, hasFetched]);

  if (loading)
    return (
      <div className="w-full h-[90vh] flex justify-center items-center bg-base-lightBlue">
        {languageTranslate(language, "loading")}
      </div>
    );
  if (isServerError) return <ServerError />;

  return (
    <Routes>
      <Route path="/*" element={<Dashboard />} />

      {/* Fallback route for unmatched paths */}
      <Route path="*" element={<FallbackComponent />} />
    </Routes>
  );
};

export default Content;
