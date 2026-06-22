import { tabItems } from "@/utils/data";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const ORG_BASE_PATH = "/organizations";

export const useOrgTabRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const userPermissionState = useSelector((state) => state?.userPermission);
  const userPermissions = userPermissionState?.userPermissions?.map(
    (perm) => perm?.code_name
  );

  const accessiblePaths = tabItems.filter((tab) => {
    if (tab.permissions.length === 0) return true;
    return tab.permissions.some((p) => userPermissions.includes(p));
  });



  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === ORG_BASE_PATH && accessiblePaths.length > 0) {
      navigate(accessiblePaths[0].link, { replace: true });
      return;
    }

    const isAllowed = accessiblePaths.some((tab) => tab.link === currentPath);
    if (!isAllowed && accessiblePaths.length > 0) {
      navigate(accessiblePaths[0].link, { replace: true });
    }
  }, [location.pathname, accessiblePaths, navigate]);
};
