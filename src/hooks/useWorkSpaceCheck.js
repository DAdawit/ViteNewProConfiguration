import apiRequest from "@/utils/request";
import { useEffect, useState } from "react";

const useWorkSpaceCheck = (accessMode, contextID) => {
  const token = sessionStorage.getItem("tID");
  const [workSpaces, setWorkSpaces] = useState({});

  const getWorkSpaces = async () => {
    try {
      await apiRequest
        .get("/account_switch_api/workspaces", {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_WRKSPACE_API: import.meta.env.VITE_APP_GET_WRKSPACE_API,
          },
        })
        .then((res) => {
          setWorkSpaces(res?.data);
        })
        .catch(() => {
          setWorkSpaces([]);
        });
    } catch {
      setWorkSpaces([]);
    }
  };

  useEffect(() => {
    getWorkSpaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findDelegatedWorkSpace = workSpaces?.delegated?.find(
    (item) => item?.delegationId === contextID,
  );
  const findSharedWorkSpace = workSpaces?.shared?.find(
    (item) => item?.shareId === contextID,
  );
  const getEffectiveStructureId = () => {
    if (accessMode === "delegation" && workSpaces?.delegated?.length > 0) {
      return findDelegatedWorkSpace?.structure?.id;
    }
    if (accessMode === "shared" && workSpaces?.shared?.length > 0) {
      return findSharedWorkSpace?.structure?.id;
    }
    if (accessMode === "position") {
      return workSpaces?.positions?.find(
        (workSpace) => workSpace?.positionId?.toString() === contextID,
      )?.structure?.id;
    }
    return null;
  };
  const structureID = getEffectiveStructureId();

  return { structureID };
};

export default useWorkSpaceCheck;
