import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";

export const useFolderNavigation = () => {
  const { id: rootId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentFolderId = useCallback(() => {
    const pathSegments = location.pathname.split("/");

    const repoIndex = pathSegments.findIndex(
      (segment) => segment === "repositories",
    );
    if (repoIndex === -1) {
      return rootId; 
    }

    const currentRootId = pathSegments[repoIndex + 1];

    if (!currentRootId) {
      return rootId;
    }

    const routeSegments = [
      "access-grant",
      "version-control",
      "document-detail",
    ];
    const folderSegments = pathSegments
      .slice(repoIndex + 2)
      .filter((segment) => !routeSegments.includes(segment));

    if (folderSegments.length > 0) {
 
      return folderSegments[folderSegments.length - 1];
    }
    return currentRootId;
  }, [location.pathname, rootId]);

  const navigateToFolder = useCallback(
    (folderId) => {
      const pathSegments = location.pathname.split("/");
      const repoIndex = pathSegments.findIndex(
        (segment) => segment === "repositories",
      );

      if (repoIndex === -1) return;

      const currentRootId = pathSegments[repoIndex + 1];

      if (currentRootId) {
     
        const newPath = `/repositories/${currentRootId}/${folderId}`;
        navigate(newPath);
      } else {
        navigate(`/repositories/${folderId}`);
      }
    },
    [location.pathname, navigate],
  );
  const navigateUp = useCallback(() => {
    const pathSegments = location.pathname.split("/");
    const repoIndex = pathSegments.findIndex(
      (segment) => segment === "repositories",
    );

    if (repoIndex === -1) return;

    const currentRootId = pathSegments[repoIndex + 1];
    if (currentRootId) {
      navigate(`/repositories/${currentRootId}`);
    } else {
      navigate("/repositories");
    }
  }, [location.pathname, navigate]);
  const navigateToRoot = useCallback(() => {
    navigate(`/repositories/${rootId}`);
  }, [navigate, rootId]);

  const isAtRoot = useCallback(() => {
    const currentFolderId = getCurrentFolderId();
    return currentFolderId === rootId;
  }, [getCurrentFolderId, rootId]);
  const getPathSegments = useCallback(() => {
    const pathSegments = location.pathname.split("/");
    const repoIndex = pathSegments.findIndex(
      (segment) => segment === "repositories",
    );

    if (repoIndex === -1) return [rootId];
    const folderSegments = pathSegments.slice(repoIndex + 2);

    if (folderSegments.length === 0) {
      return [rootId];
    }
    return [rootId, ...folderSegments];
  }, [location.pathname, rootId]);

  const navigateToPathSegment = useCallback(
    (index) => {
      const segments = getPathSegments();
      if (index < 0 || index >= segments.length) return;

      if (index === 0) {
        navigateToRoot();
      } else {
        const targetFolderId = segments[index];
        navigateToFolder(targetFolderId);
      }
    },
    [getPathSegments, navigateToRoot, navigateToFolder],
  );
  const getCurrentFolderPath = useCallback(() => {
    const pathSegments = location.pathname.split("/");
    const repoIndex = pathSegments.findIndex(
      (segment) => segment === "repositories",
    );

    if (repoIndex === -1) return "";
    const docDetailIndex = pathSegments.findIndex(
      (segment) => segment === "document-detail",
    );
    const endIndex =
      docDetailIndex !== -1 ? docDetailIndex : pathSegments.length;

    const routeSegments = [
      "access-grant",
      "version-control",
      "document-detail",
    ];
    const folderSegments = pathSegments
      .slice(repoIndex + 1, endIndex)
      .filter((segment) => !routeSegments.includes(segment));
    if (folderSegments.length >= 2) {
      return `${folderSegments[0]}/${folderSegments[1]}`;
    } else if (folderSegments.length === 1) {
      return folderSegments[0];
    }

    return "";
  }, [location.pathname]);

  const navigateToFileDetail = useCallback(
    (fileId) => {
      const currentPath = getCurrentFolderPath();

      const newPath = `/repositories/${currentPath}/document-detail/${fileId}`;
      navigate(newPath);
    },
    [getCurrentFolderPath, navigate],
  );

  const navigateToEditFile = useCallback(
    (fileId) => {
      const currentPath = getCurrentFolderPath();
      const newPath = `/repositories/${currentPath}/document-detail/${fileId}/edit`;
      navigate(newPath);
    },
    [getCurrentFolderPath, navigate],
  );

  const navigateToTab = useCallback(
    (tabName) => {
      const currentPath = getCurrentFolderPath();

      if (tabName === "Contents") {
        navigate(`/repositories/${currentPath}`);
      } else if (tabName === "AccessGrant") {
        navigate(`/repositories/${currentPath}/access-grant`);
      } else if (tabName === "VersionControl") {
        navigate(`/repositories/${currentPath}/version-control`);
      }
    },
    [getCurrentFolderPath, navigate],
  );

  return {
    rootId,
    currentFolderId: getCurrentFolderId(),
    getCurrentFolderId,
    getCurrentFolderPath,
    navigateToFolder,
    navigateUp,
    navigateToRoot,
    isAtRoot: isAtRoot(),
    getPathSegments,
    navigateToPathSegment,
    navigateToFileDetail,
    navigateToEditFile,
    navigateToTab,
  };
};
