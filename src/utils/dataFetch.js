import apiRequest from "./request";

export const getOrgFilters = async (token) => {
  try {
    const response = await apiRequest.get("/org_api/get_org_filters", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLEORG_API: import.meta.env.VITE_APP_GET_GSINGLEORG_API,
      },
    });
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};
export const getStructStructureLevelFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/structure_api/get_structlevel_forstruct",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSTRUCTS_API: import.meta.env.VITE_APP_GET_GSTRUCTS_API,
        },
      },
    );
    return {
      structLevel: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structLevel: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructOrgFilters = async (id, token) => {
  try {
    if (id && token) {
      const response = await apiRequest.get(`/org_api/get_org_struct`, {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEORG_API: import.meta.env.VITE_APP_GET_GSINGLEORG_API,
        },
      });
      return {
        structs: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        structs: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructOrgLevel = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/structure_level_api/filter_org_forstructlevel`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GSINGLESTRLEVEL_API: import.meta.env
              .VITE_APP_GET_GSINGLESTRLEVEL_API,
          },
        },
      );
      return {
        orgs: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        orgs: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgDelegation = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/dlgs_api/get_orgs_fordelegation`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GDLG_API: import.meta.env.VITE_APP_GET_GDLG_API,
          },
        },
      );
      return {
        orgs: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        orgs: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgShared = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/accshare_api/get_orgs_fordelegation`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GDLG_API: import.meta.env.VITE_APP_GET_GDLG_API,
          },
        },
      );
      return {
        orgs: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        orgs: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructDelegation = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/dlgs_api/get_structure_fordelegation`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_DCDDLGS_API: import.meta.env.VITE_APP_GET_DCDDLGS_API,
          },
        },
      );
      return {
        struct: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        struct: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersFilters = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(`/user_api/get_all_usrs`, {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ALLUSRS_API: import.meta.env.VITE_APP_GET_ALLUSRS_API,
        },
      });
      return {
        users: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        users: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersDeleationFilters = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/dlgs_api/get_users_fordelegation`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_DCDDLGS_API: import.meta.env.VITE_APP_GET_DCDDLGS_API,
          },
        },
      );

      return {
        users: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        users: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersSharedFilters = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/accshare_api/get_usersforaccountsharing`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_DCDACCSHARES_API: import.meta.env.VITE_APP_GET_DCDACCSHARES_API,
          },
        },
      );
      return {
        users: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        users: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUserPositionDeleationFilters = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/dlgs_api/get_userposition_fordelegation`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_DCDDLGS_API: import.meta.env.VITE_APP_GET_DCDDLGS_API,
          },
        },
      );
      return {
        usersPositions: response?.data || [],
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        usersPositions: [],
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      usersPositions: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAuditAnalytics = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/audit_api/get_auditslgs_analytics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_AUDITLGS_API: import.meta.env.VITE_APP_GET_AUDITLGS_API,
          },
        },
      );
      return {
        auditAnalytics: response?.data || {},
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        auditAnalytics: {},
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      auditAnalytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategoryFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/permcategory_api/get_permission_category_all",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLPERMCATEGORY_API: import.meta.env
            .VITE_APP_GET_GALLPERMCATEGORY_API,
        },
      },
    );
    return {
      permCategory: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permCategory: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOgForRecordOffceFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/record_office_api/get_organization_record_office",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEROFFICE_API: import.meta.env
            .VITE_APP_GET_GSINGLEROFFICE_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructureLevelsForStructureFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/structure_api/filter_structlevel_orgs",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLESTRUCT_API: import.meta.env.VITE_APP_GET_GSINGLESTRUCT_API,
        },
      },
    );
    return {
      levels: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      levels: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrganizationForStructureFilters = async (token) => {
  try {
    const response = await apiRequest.get("/structure_api/filter_struct_orgs", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLESTRUCT_API: import.meta.env.VITE_APP_GET_GSINGLESTRUCT_API,
      },
    });
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAllStructuresFilters = async (token) => {
  try {
    const response = await apiRequest.get("/structure_api/get_all_structures", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GALLSTRUCT_API: import.meta.env.VITE_APP_GET_GALLSTRUCT_API,
      },
    });
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategoryForStructureFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/structure_api/filter_prmswith_category",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLESTRUCT_API: import.meta.env.VITE_APP_GET_GSINGLESTRUCT_API,
        },
      },
    );
    return {
      permCategory: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permCategory: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRecordOfficeForStructureFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/structure_api/get_recordoffice_forstruct",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSTRUCTS_API: import.meta.env.VITE_APP_GET_GSTRUCTS_API,
        },
      },
    );
    return {
      recordOffice: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      recordOffice: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getLevelForStructureFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      "/structure_api/get_structlevel_forstruct",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSTRUCTS_API: import.meta.env.VITE_APP_GET_GSTRUCTS_API,
        },
      },
    );
    return {
      levelStruct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      levelStruct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgData = async (id, token) => {
  try {
    const response = await apiRequest.get(`/org_api/get_org/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLEORG_API: import.meta.env.VITE_APP_GET_GSINGLEORG_API,
      },
    });
    return {
      org: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      org: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructData = async (id, token) => {
  try {
    const response = await apiRequest.get(
      `/structure_api/get_structure/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLESTRUCT_API: import.meta.env.VITE_APP_GET_GSINGLESTRUCT_API,
        },
      },
    );
    return {
      structure: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structure: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermCategoryData = async (token) => {
  try {
    const response = await apiRequest.get(
      `/permcategory_api/get_permission_category_all`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLPERMCATEGORY_API: import.meta.env
            .VITE_APP_GET_GALLPERMCATEGORY_API,
        },
      },
    );
    return {
      permCategory: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permCategory: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getDelegationAnalytics = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(`/dlgs_api/get_analyt_dlg`, {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ANLYTDLGS_API: import.meta.env.VITE_APP_GET_ANLYTDLGS_API,
        },
      });
      return {
        delegationAnalytics: response?.data || {},
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        delegationAnalytics: {},
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      delegationAnalytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getSharedAnalytics = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/accshare_api/get_analyt_accshare`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_ANLYTACCSHARES_API: import.meta.env
              .VITE_APP_GET_ANLYTACCSHARES_API,
          },
        },
      );
      return {
        sharedAnalytics: response?.data || {},
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        sharedAnalytics: {},
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      sharedAnalytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategoryForDelegationFilters = async (
  token,
  positionId,
) => {
  try {
    const response = await apiRequest.get(
      `/dlgs_api/get_prmswithlevels_fordelegation/${positionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GDLG_API: import.meta.env.VITE_APP_GET_GDLG_API,
        },
      },
    );
    return {
      permCategory: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permCategory: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategoryForSharedFilters = async (
  token,
  positionId,
) => {
  try {
    const response = await apiRequest.get(
      `/accshare_api/get_permission_accountsharing/${positionId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_DCDACCSHARES_API: import.meta.env.VITE_APP_GET_DCDACCSHARES_API,
        },
      },
    );
    return {
      permCategory: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permCategory: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getDelegationDetailData = async (id, token) => {
  try {
    const response = await apiRequest.get(`/dlgs_api/get_delegation/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GDLG_API: import.meta.env.VITE_APP_GET_GDLG_API,
      },
    });
    return {
      delegation: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      delegation: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getSharedDetailData = async (id, token) => {
  try {
    const response = await apiRequest.get(
      `/accshare_api/get_accountsharing/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GACCSHARE_API: import.meta.env.VITE_APP_GET_GACCSHARE_API,
        },
      },
    );
    return {
      shared: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      delegation: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgsForGroupFilter = async (token) => {
  try {
    const response = await apiRequest.get("/group_api/get_grps_filters", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GALLGROUPS_API: import.meta.env.VITE_APP_GET_GALLGROUPS_API,
      },
    });
    return {
      groups: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      groups: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategories = async (token) => {
  try {
    const response = await apiRequest.get("/group_api/get_grpsprms_filters", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLEGROUP_API: import.meta.env.VITE_APP_GET_GSINGLEGROUP_API,
      },
    });
    return {
      categories: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      categories: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getGroupPermissionDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/group_api/get_grps/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLEGROUP_API: import.meta.env.VITE_APP_GET_GSINGLEGROUP_API,
      },
    });
    return {
      categories: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      categories: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionCategoryDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/permcategory_api/get_permission_category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GPERMCATEGORY_API: import.meta.env.VITE_APP_GET_GPERMCATEGORY_API,
        },
      },
    );
    return {
      perCatgoryDetail: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      perCatgoryDetail: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUserPositionDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/position_api/get_user_position/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEUSERPOS_API: import.meta.env
            .VITE_APP_GET_GSINGLEUSERPOS_API,
        },
      },
    );
    return {
      perCatgoryDetail: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      perCatgoryDetail: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgsForUserPosition = async (token) => {
  try {
    const response = await apiRequest.get(
      "/position_api/get_orgs_foruserposition",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLUSERPOS_API: import.meta.env.VITE_APP_GET_GALLUSERPOS_API,
        },
      },
    );
    return {
      groups: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      groups: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForUserPosition = async (token) => {
  try {
    const response = await apiRequest.get(
      "/position_api/get_structs_foruserposition",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLUSERPOS_API: import.meta.env.VITE_APP_GET_GALLUSERPOS_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersForUserPosition = async (token) => {
  try {
    const response = await apiRequest.get(
      "/position_api/get_users_foruserposition",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEUSERPOS_API: import.meta.env
            .VITE_APP_GET_GSINGLEUSERPOS_API,
        },
      },
    );
    return {
      users: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};
export const getOrgsForRecordOffice = async (token) => {
  try {
    const response = await apiRequest.get(
      "/record_office_api/get_organization_record_office",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEROFFICE_API: import.meta.env
            .VITE_APP_GET_GSINGLEROFFICE_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRecordOfficeDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/record_office_api/get_record_office/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEROFFICE_API: import.meta.env
            .VITE_APP_GET_GSINGLEROFFICE_API,
        },
      },
    );
    return {
      recordOffice: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      recordOffice: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresWithStructuresLevelForRecordOffice = async (
  token,
) => {
  try {
    const response = await apiRequest.get(
      "/record_office_api/get_structwithstructurelevel_record_office",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLEROFFICE_API: import.meta.env
            .VITE_APP_GET_GSINGLEROFFICE_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getGroupsForUsersFilter = async (token) => {
  try {
    const response = await apiRequest.get(`/user_api/group_filters`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_ALLUSRS_API: import.meta.env.VITE_APP_GET_ALLUSRS_API,
      },
    });
    return {
      groups: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      groups: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgsForUsersFilter = async (token) => {
  try {
    const response = await apiRequest.get(`/user_api/org_filters`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_ANLYUSR_API: import.meta.env.VITE_APP_GET_ANLYUSR_API,
      },
    });
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getPermissionsForUsersFilter = async (token) => {
  try {
    const response = await apiRequest.get(`/user_api/prms_filters`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_USR_API: import.meta.env.VITE_APP_GET_USR_API,
      },
    });
    return {
      permissions: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      permissions: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForUsersFilter = async (token) => {
  try {
    const response = await apiRequest.get(
      `/user_api/filter_structure_by_users`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_USR_API: import.meta.env.VITE_APP_GET_USR_API,
        },
      },
    );
    return {
      structures: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/user_api/get_usrs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_USR_API: import.meta.env.VITE_APP_GET_USR_API,
      },
    });
    return {
      user: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      user: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getSettingDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/setting_api/get_settings/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSETTING_API: import.meta.env.VITE_APP_GET_GSETTING_API,
      },
    });
    return {
      setting: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      setting: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgForSettingsFilter = async (token) => {
  try {
    const response = await apiRequest.get(
      `/setting_api/get_setting_org_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTSETTING_API: import.meta.env.VITE_APP_GET_FLTSETTING_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getLetterNumDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/letnum_api/get_letter_nums/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GLETNUM_API: import.meta.env.VITE_APP_GET_GLETNUM_API,
      },
    });
    return {
      letterNum: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      letterNum: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgForLetterNumFilter = async (token) => {
  try {
    const response = await apiRequest.get(
      `/letnum_api/get__letter_num_org_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTLETNUM_API: import.meta.env.VITE_APP_GET_FLTLETNUM_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAllLetterNumFilter = async (token) => {
  try {
    const response = await apiRequest.get(`/letnum_api/get_all_letter_nums`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GALLLETNUM_API: import.meta.env.VITE_APP_GET_GALLLETNUM_API,
      },
    });
    return {
      letterNums: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      letterNums: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getParaphDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/paraph_api/get_paraph/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSRPAR_API: import.meta.env.VITE_APP_GET_GSRPAR_API,
      },
    });
    return {
      paraph: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      paraph: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// external Org

export const getExternalOrgDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/ex_org_api/get_exorg/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSEXORG_API: import.meta.env.VITE_APP_GET_GSEXORG_API,
      },
    });
    return {
      externalOrg: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      externalOrg: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgForExternalOrgFilter = async (token) => {
  try {
    const response = await apiRequest.get(`/ex_org_api/get_exorgs_filters`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GFEXORGS_API: import.meta.env.VITE_APP_GET_GFEXORGS_API,
      },
    });
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// hero

export const getHeroSectionDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_hero_section_api/get_cms_hero_section/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSCMSHS_API: import.meta.env.VITE_APP_GET_GSCMSHS_API,
        },
      },
    );
    return {
      hero: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      hero: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getHeadMessageDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_main_dir_api/get_cms_main_dir/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_SCMSMD_API: import.meta.env.VITE_APP_GET_SCMSMD_API,
        },
      },
    );
    return {
      headMessage: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      headMessage: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// cms service

export const getOrgsForCmsServices = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_org_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSORGF_API: import.meta.env.VITE_APP_GET_CMSORGF_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForCmsServices = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_struct_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSSTRUCTF_API: import.meta.env.VITE_APP_GET_CMSSTRUCTF_API,
        },
      },
    );
    return {
      structures: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCaseReqForCmsServices = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_casreq_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSCRQF_API: import.meta.env.VITE_APP_GET_CMSCRQF_API,
        },
      },
    );
    return {
      caseRequests: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequests: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// cms organization

export const getOrgsForCmsOrganization = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_api/filter_internal_orgs_for_cms_org`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_INTERNAL_ORGS_CMS_API: import.meta.env
            .VITE_APP_GET_FILTER_INTERNAL_ORGS_CMS_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getParentOrgsForCmsOrganization = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_api/filter_parent_cms_orgs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_PARENT_CMS_ORGS_API: import.meta.env
            .VITE_APP_GET_FILTER_PARENT_CMS_ORGS_API,
        },
      },
    );
    return {
      parentOrgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      parentOrgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCmsOrganizationDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/cms_org_api/get_cms_org/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_CMS_ORG_BY_ID_API: import.meta.env.VITE_APP_GET_CMS_ORG_BY_ID_API,
      },
    });
    return {
      org: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      org: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// cms structure level

export const getOrgsForCmsStructureLevel = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcut_lvl_api/filter_cms_orgs_for_struct_lvl`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_CMS_ORGS_STRUCT_LVL_API: import.meta.env
            .VITE_APP_GET_FILTER_CMS_ORGS_STRUCT_LVL_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCmsStructureLevelDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcut_lvl_api/get_cms_org_struct_lvl/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMS_ORG_STR_LVL_ID_API: import.meta.env
            .VITE_APP_GET_CMS_ORG_STR_LVL_ID_API,
        },
      },
    );
    return {
      structureLevel: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structureLevel: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// cms structures

export const getOrgsForCmsStructures = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcuture_api/filter_cms_orgs_for_struct`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_CMS_ORGS_STRUCT_API: import.meta.env
            .VITE_APP_GET_FILTER_CMS_ORGS_STRUCT_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getInternalStructuresForCmsSturcture = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcuture_api/filter_internal_structs_for_cms_org_struct`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_INT_STRUCTS_CMS_API: import.meta.env
            .VITE_APP_GET_FILTER_INT_STRUCTS_CMS_API,
        },
      },
    );
    return {
      internalStructs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      internalStructs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresLevelsForCmsSturcture = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcuture_api/filter_structure_levels_for_cms_org_struct`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_STRUCT_LEVELS_CMS_API: import.meta.env
            .VITE_APP_GET_FILTER_STRUCT_LEVELS_CMS_API,
        },
      },
    );
    return {
      structLevels: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structLevels: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getParentCmsOrgsForCmsSturcture = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcuture_api/filter_parent_cms_org_structs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FILTER_PARENT_CMS_STRUCTS_API: import.meta.env
            .VITE_APP_GET_FILTER_PARENT_CMS_STRUCTS_API,
        },
      },
    );
    return {
      parentOrgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      parentOrgs: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCmsStuctureDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_org_strcuture_api/get_cms_org_struct/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMS_ORG_STR_ID_API: import.meta.env
            .VITE_APP_GET_CMS_ORG_STR_ID_API,
        },
      },
    );
    return {
      cmsStructure: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      cmsStructure: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// faqs

export const getCmsFAQs = async (token, id) => {
  try {
    const response = await apiRequest.get(`/cms_faq_api/get_cms_faq/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_CMS_FAQ_BY_ID_API: import.meta.env.VITE_APP_GET_CMS_FAQ_BY_ID_API,
      },
    });
    return {
      faq: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      faq: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// user manual
export const getUserManualDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_user_manual_api/get_cms_user_manual/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMS_USER_MANUAL_BY_ID_API: import.meta.env
            .VITE_APP_GET_CMS_USER_MANUAL_BY_ID_API,
        },
      },
    );
    return {
      userManual: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      userManual: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getVideoGuideDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_support_video_api/get_cms_support_video/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMS_SUPPORT_VIDEO_BY_ID_API: import.meta.env
            .VITE_APP_GET_CMS_SUPPORT_VIDEO_BY_ID_API,
        },
      },
    );
    return {
      videoGuide: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      videoGuide: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getProclamationDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/proclam_api/get_proclamation/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSCMSPROC_API: import.meta.env.VITE_APP_GET_GSCMSPROC_API,
        },
      },
    );
    return {
      proclamation: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      proclamation: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// cms service
export const getOrgsForCmsServiceFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_org_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSORGF_API: import.meta.env.VITE_APP_GET_CMSORGF_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForCmsServiceFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_struct_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSSTRUCTF_API: import.meta.env.VITE_APP_GET_CMSSTRUCTF_API,
        },
      },
    );
    return {
      structrues: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structrues: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCaseRequestsForCmsServiceFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_casreq_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_CMSCRQF_API: import.meta.env.VITE_APP_GET_CMSCRQF_API,
        },
      },
    );
    return {
      caseRequests: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequests: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCmsServiceDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/cms_service_api/get_cms_service/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSCMSSER_API: import.meta.env.VITE_APP_GET_GSCMSSER_API,
        },
      },
    );
    return {
      service: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      service: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// const Greetings

export const getOrgsForGreetingFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/greeting_api/get_greetings_filters`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLGREETINGS_API: import.meta.env.VITE_APP_GET_GALLGREETINGS_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getGreetingDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/greeting_api/get_greeting/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSINGLEGREETING_API: import.meta.env
          .VITE_APP_GET_GSINGLEGREETING_API,
      },
    });
    return {
      greeting: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      greeting: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// letter template
export const getOrgsForLetterTemplate = async (token) => {
  try {
    const response = await apiRequest.get(
      `/letter_header_footer_api/get_organization_letter_header_footer`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLELHF_API: import.meta.env.VITE_APP_GET_GSINGLELHF_API,
        },
      },
    );

    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getLetterTemplatesDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/letter_header_footer_api/get_letter_header_footer/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSINGLELHF_API: import.meta.env.VITE_APP_GET_GSINGLELHF_API,
        },
      },
    );
    return {
      letterTemplate: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      letterTemplate: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// Organization users

export const getOrgsForOrganizationUsers = async (token) => {
  try {
    const response = await apiRequest.get(
      `/ex_org_user_api/filter_organizations`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FOFEXORGUSR_API: import.meta.env.VITE_APP_GET_FOFEXORGUSR_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRecordOfficesForOrganizationUsers = async (token) => {
  try {
    const response = await apiRequest.get(
      `/ex_org_user_api/filter_record_offices`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FROFEXORGUSR_API: import.meta.env.VITE_APP_GET_FROFEXORGUSR_API,
        },
      },
    );

    return {
      recordOffices: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      recordOffices: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgUserDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/ex_org_user_api/get_exorg_user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSEXORGUSER_API: import.meta.env.VITE_APP_GET_GSEXORGUSER_API,
        },
      },
    );
    return {
      orgUser: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgUser: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgUserAnalytics = async (token) => {
  try {
    const response = await apiRequest.get(
      `/ex_org_user_api/get_exorg_user_aytc`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_EXORGUSRAYC_API: import.meta.env.VITE_APP_GET_EXORGUSRAYC_API,
        },
      },
    );
    return {
      analytics: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      analytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRecordOfficesInternalIncomingLetters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/filter_record_office`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTFRRIINCLTR_API: import.meta.env.VITE_APP_GET_FLTFRRIINCLTR_API,
        },
      },
    );

    return {
      recordOffices: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      recordOffices: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingAnalytics = async (token) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/incoming_ltr_analytics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_INCMLTRALTC_API: import.meta.env.VITE_APP_GET_INCMLTRALTC_API,
        },
      },
    );
    return {
      analytics: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      analytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructFromIncomingLetterFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/filter_from_structure`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTFROMIINCLTR_API: import.meta.env
            .VITE_APP_GET_FLTFROMIINCLTR_API,
        },
      },
    );
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructToIncomingLetterFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/filter_to_structure`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTTOINCLTR_API: import.meta.env.VITE_APP_GET_FLTTOINCLTR_API,
        },
      },
    );
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_single_incoming_letters/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSNGLINCLTR_API: import.meta.env.VITE_APP_GET_GSNGLINCLTR_API,
        },
      },
    );
    return {
      incoming: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      incoming: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingActiveDeadLine = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_current_deadline_incoming_ltr/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GDEADLINES_API: import.meta.env.VITE_APP_GET_GDEADLINES_API,
        },
      },
    );
    return {
      activeDeadline: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      activeDeadline: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingDeadLines = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_all_deadline_incoming_ltr/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLDEADLINES_API: import.meta.env.VITE_APP_GET_GALLDEADLINES_API,
        },
      },
    );
    return {
      deadlines: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      deadlines: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingFromForwardUsers = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_all_deadline_incoming_ltr/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GALLDEADLINES_API: import.meta.env.VITE_APP_GET_GALLDEADLINES_API,
        },
      },
    );
    return {
      deadlines: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      deadlines: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getUsersParaph = async (token) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/filter_user_paraph`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLRPRHORGINCLTR_API: import.meta.env
            .VITE_APP_GET_FLRPRHORGINCLTR_API,
        },
      },
    );
    return {
      paraphs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      paraphs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getForwardHistoryDetail = async (token, id, forward_id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_incoming_ltr_forwards/${id}/${forward_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GFRWDINCLTR_API: import.meta.env.VITE_APP_GET_GFRWDINCLTR_API,
        },
      },
    );
    return {
      forwardData: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      forwardData: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingDeadlineDetail = async (token, id, deadline_id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_single_deadline_incoming_ltr/${id}/${deadline_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GDEADLINE_API: import.meta.env.VITE_APP_GET_GDEADLINE_API,
        },
      },
    );
    return {
      deadlineData: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      deadlineData: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getIncomingStructureReplyFilters = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/filter_structure_for_reply/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_INLTRSF_API: import.meta.env.VITE_APP_GET_INLTRSF_API,
        },
      },
    );
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getReplyHistoryDetail = async (token, id, reply_id) => {
  try {
    const response = await apiRequest.get(
      `/incoming_ltr_api/get_reply_incoming_ltr/${id}/${reply_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GRPLYINCLTR_API: import.meta.env.VITE_APP_GET_GRPLYINCLTR_API,
        },
      },
    );
    return {
      replyData: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      replyData: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// accusations

export const getOrgForAccusation = async (token) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_org_filter`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCFORG_API: import.meta.env.VITE_APP_GET_ACCFORG_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAccusationDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/get_accusation/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSGLEACC_API: import.meta.env.VITE_APP_GET_GSGLEACC_API,
        },
      },
    );
    return {
      accusation: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      accusation: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructruesForAccusationAssignment = async (token) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_struct_filter`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCFSTRUCT_API: import.meta.env.VITE_APP_GET_ACCFSTRUCT_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAccusationAnalytics = async (token) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_analytics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GACCANYT_API: import.meta.env.VITE_APP_GET_GACCANYT_API,
        },
      },
    );
    return {
      analytics: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      analytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const ReexamineStructureFilters = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `
      /accusation_api/accusation_reexamine_filter/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCFOREXM_API: import.meta.env.VITE_APP_GET_ACCFOREXM_API,
        },
      },
    );
    return {
      re_examines: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      re_examines: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const checkIsFirstResponseISGiven = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_is_first/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCCHIFR_API: import.meta.env.VITE_APP_GET_ACCCHIFR_API,
        },
      },
    );
    return {
      firstResponse: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      firstResponse: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const fetchUnRespondedAccusationExamines = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_reexamine_filter/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCFOREXM_API: import.meta.env.VITE_APP_GET_ACCFOREXM_API,
        },
      },
    );
    return {
      re_examines: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      re_examines: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const fetchStructuresForReExaminAccusation = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/accusation_api/accusation_reexamine_struct_filter/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_ACCFOREXM_API: import.meta.env.VITE_APP_GET_ACCFOREXM_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// case request
export const getOrganizationForCaseRequest = async (token) => {
  try {
    const response = await apiRequest.get(
      `/case_req_api/org_filter_for_case_req`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FORGFCREQ_API: import.meta.env.VITE_APP_GET_FORGFCREQ_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructureForCaseRequest = async (token) => {
  try {
    const response = await apiRequest.get(
      `/case_req_api/struct_filter_for_case_req`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FSTRUFCREQ_API: import.meta.env.VITE_APP_GET_FSTRUFCREQ_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCaseRequestDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/case_req_api/get_case_req/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSCREQ_API: import.meta.env.VITE_APP_GET_GSCREQ_API,
      },
    });
    return {
      caseRequest: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequest: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};
export const getCaseRequestDetailWithQuestions = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/case_req_api/get_case_req_questions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GREQQ_API: import.meta.env.VITE_APP_GET_GREQQ_API,
        },
      },
    );
    return {
      caseRequest: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequest: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// questions

// questions
export const getQuestionDetial = async (token, id) => {
  try {
    const response = await apiRequest.get(`/question_api/get_question/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSQ_API: import.meta.env.VITE_APP_GET_GSQ_API,
      },
    });
    return {
      question: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      question: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOrgsForQuestions = async (token) => {
  try {
    const response = await apiRequest.get(
      `/question_api/org_filter_for_question`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FORGFQ_API: import.meta.env.VITE_APP_GET_FORGFQ_API,
        },
      },
    );
    return {
      orgs: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      orgs: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCaseRequestsForQuestions = async (token) => {
  try {
    const response = await apiRequest.get(
      `/question_api/creq_filter_for_question`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FCRFQ_API: import.meta.env.VITE_APP_GET_FCRFQ_API,
        },
      },
    );
    return {
      caseRequests: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequests: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

//cases

export const getFromStructuresFilters = async (token) => {
  try {
    const response = await apiRequest.get("/case_api/filter_from_structure", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRFMSFCASE_API: import.meta.env.VITE_APP_GET_FLTRFMSFCASE_API,
      },
    });
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getToStructuresFilters = async (token) => {
  try {
    const response = await apiRequest.get("/case_api/filter_to_structure", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRTOSFCASE_API: import.meta.env.VITE_APP_GET_FLTRTOSFCASE_API,
      },
    });
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getForwardStructuresFilters = async (token) => {
  try {
    const response = await apiRequest.get("/case_api/filter_for_case_forward_structure", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRSFFCASE_API: import.meta.env.VITE_APP_GET_FLTRSFFCASE_API,
      },
    });
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};


export const getReplyToStructuresFilters = async (token,id) => {
  try {
    const response = await apiRequest.get(`/case_api/filter_to_reply_case/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRFREPCASE_API: import.meta.env.VITE_APP_GET_FLTRFREPCASE_API,
      },
    });
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getCaseDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/case_api/get_case/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GSCA_API: import.meta.env.VITE_APP_GET_GSCA_API,
      },
    });
    return {
      case: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      case: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getForwardCaseDetail = async (token, id,forward_id) => {
  try {
    const response = await apiRequest.get(`/case_api/get_case_forward/${id}/${forward_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GFRWDCASE_API: import.meta.env.VITE_APP_GET_GFRWDCASE_API,
      },
    });
    return {
      forward: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      forward: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getReplyCaseDetail = async (token, id,reply_id) => {
  try {
    const response = await apiRequest.get(`/case_api/get_reply_case/${id}/${reply_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GRPLYCASE_API: import.meta.env.VITE_APP_GET_GRPLYCASE_API,
      },
    });
    return {
      reply: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      reply: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getFromCaseRequestFilters = async (token) => {
  try {
    const response = await apiRequest.get("/case_api/filter_case_requests", {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRFREPCASE_API: import.meta.env.VITE_APP_GET_FLTRFREPCASE_API
      },
    });
    return {
      caseRequests: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequests: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// document repository
export const getStructuresForDocumentRepoCud = async (token) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/filter_owner_structures_cud`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FOSFCRUDDOCRP_API: import.meta.env.VITE_APP_GET_FOSFCRUDDOCRP_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRepositoryFolderDetails = async (
  token,
  id,
  page = 1,
  documentTitleFilter = "",
) => {
  try {
    const queryParams = new URLSearchParams({ page: page.toString() });
    if (documentTitleFilter) {
      queryParams.append("document_title_filter", documentTitleFilter);
    }

    const response = await apiRequest.get(
      `/document_repository_api/get_document_folder/${id}?${queryParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GDOCRP_API: import.meta.env.VITE_APP_GET_GDOCRP_API,
        },
      },
    );
    return {
      repoFolders: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      repoFolders: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};
export const getRepositoryFilesDetails = async (
  token,
  id,
  page = 1,
  documentTitle = "",
) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/get_document_repository/${id}?page=${page}&document_title_filter=${documentTitle}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GREPDOCRPS_API: import.meta.env.VITE_APP_GET_GREPDOCRPS_API,
        },
      },
    );
    return {
      repoFiles: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      repoFiles: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRepositoryDocumentFileDetail = async (token, id, fileId) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/get_document_repository/${id}/${fileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GREPDOCRP_API: import.meta.env.VITE_APP_GET_GREPDOCRP_API,
        },
      },
    );
    return {
      repoFile: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      repoFile: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getParentFoldersForEditFolder = async (token, page) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/filter_parent_folders?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FOSFCRUDDOCRP_API: import.meta.env.VITE_APP_GET_FOSFCRUDDOCRP_API,
        },
      },
    );
    return {
      parentFolders: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      parentFolders: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForFilterDocumentRepoGet = async (token) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/filter_owner_structures_get_req`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FOSFGRDOCRP_API: import.meta.env.VITE_APP_GET_FOSFGRDOCRP_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getAccessControlSingleDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/get_access_control_document_repository_single/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GACCONTDOCRP_API: import.meta.env.VITE_APP_GET_GACCONTDOCRP_API,
        },
      },
    );
    return {
      accessControlDetail: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      accessControlDetail: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getRecycleBinFileDetail = async (token, id, fileId) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/recycle_bin/folders/${id}/documents/${fileId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_REPRECBINDOCRP_API: import.meta.env
            .VITE_APP_GET_REPRECBINDOCRP_API,
        },
      },
    );
    return {
      documentDetail: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      documentDetail: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructuresForDocumentRepoAccessGrant = async (token) => {
  try {
    const response = await apiRequest.get(
      `/document_repository_api/filter_listof_structures`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FOSFCRUDDOCRP_API: import.meta.env.VITE_APP_GET_FOSFCRUDDOCRP_API,
        },
      },
    );
    return {
      structures: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      structures: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

//case request history

export const getCaseRequestHistoryDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/case_req_hist_api/get_case_req_history/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSCREQH_API: import.meta.env
            .VITE_APP_GET_GSCREQH_API
        },
      },
    );
    return {
      caseRequestHistoryDetail: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      caseRequestHistoryDetail: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

// outgoing letters
export const previewOutgoingLetter = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/outgoing_ltr_preview/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_OUTGLTRPW_API: import.meta.env.VITE_APP_GET_OUTGLTRPW_API,
        },
      },
    );
    return {
      preview: response.data || "",
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      firstResponse: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOutgoingAnalytics = async (token) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/outgoing_ltr_analytics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_OUTGLTRALTC_API: import.meta.env.VITE_APP_GET_OUTGLTRALTC_API,
        },
      },
    );
    return {
      analytics: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      analytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructFromOutgoingLetterFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/filter_from_structure`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTRFMSFOGLTR_API: import.meta.env.VITE_APP_GET_FLTRFMSFOGLTR_API,
        },
      },
    );
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getToUserForOutgoingLetterFilters = async (token) => {
  try {
    const response = await apiRequest.get(`/outgoing_ltr_api/filter_to_user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRTOUFOGLTR_API: import.meta.env.VITE_APP_GET_FLTRTOUFOGLTR_API,
      },
    });
    return {
      users: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getOutgoingDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/get_outgoing_ltr/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GOUTGLTR_API: import.meta.env.VITE_APP_GET_GOUTGLTR_API,
        },
      },
    );
    return {
      letter: response.data || {},
      error: null,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      letter: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      serverError: isServerError,
    };
  }
};

export const getOutgoingForwardHistoryDetail = async (token, id, forwardId) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/get_forwarded_outgoing_ltr/${id}/${forwardId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GSFOWDOGLTR_API: import.meta.env.VITE_APP_GET_GSFOWDOGLTR_API,
        },
      },
    );
    return {
      forwardData: response.data || {},
      error: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      forwardData: null,
      error: true,
      serverError: isServerError,
    };
  }
};

// internal memos
export const previewInternalMemo = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/outgoing_ltr_preview/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_OUTGLTRPW_API: import.meta.env.VITE_APP_GET_OUTGLTRPW_API,
        },
      },
    );
    return {
      preview: response.data || "",
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      firstResponse: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getInternalMemoAnalytics = async (token) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/outgoing_ltr_analytics`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_OUTGLTRALTC_API: import.meta.env.VITE_APP_GET_OUTGLTRALTC_API,
        },
      },
    );
    return {
      analytics: response.data || {},
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      analytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getStructFromInternalMemoFilters = async (token) => {
  try {
    const response = await apiRequest.get(
      `/outgoing_ltr_api/filter_from_structure`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_FLTRFMSFOGLTR_API: import.meta.env.VITE_APP_GET_FLTRFMSFOGLTR_API,
        },
      },
    );
    return {
      struct: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      struct: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getToUserForInternalMemoFilters = async (token) => {
  try {
    const response = await apiRequest.get(`/outgoing_ltr_api/filter_to_user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_FLTRTOUFOGLTR_API: import.meta.env.VITE_APP_GET_FLTRTOUFOGLTR_API,
      },
    });
    return {
      users: response.data || [],
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      users: [],
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getInternalMemoDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(
      `/internal_memo_api/get_internal_memo/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GINTMEMO_API: import.meta.env.VITE_APP_GET_GINTMEMO_API,
        },
      },
    );
    return {
      letter: response.data || {},
      error: null,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      letter: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      serverError: isServerError,
    };
  }
};

export const getInternalMemoForwardHistoryDetail = async (token, id, forwardId) => {
  try {
    const response = await apiRequest.get(
      `/internal_memo_api/get_forwarded_internal_memo/${id}/${forwardId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_GFWRDINTMEMO_API: import.meta.env.VITE_APP_GET_GFWRDINTMEMO_API,
        },
      },
    );
    return {
      forwardData: response.data || {},
      error: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      forwardData: null,
      error: true,
      serverError: isServerError,
    };
  }
};

// reports

export const filterOrganizationsForReports = async (token) => {
  try {
    const response = await apiRequest.get(
      `/dashboard_api/filter_organization`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_PRORGFLTR_API: import.meta.env.VITE_APP_GET_PRORGFLTR_API,
        },
      },
    );
    return {
      orgs: response.data || {},
      error: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      orgs: null,
      error: true,
      serverError: isServerError,
    };
  }
};

export const filterStructuresForReports = async (token, page) => {
  try {
    const response = await apiRequest.get(
      `/dashboard_api/filter_structure/?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_PROSTRUCTFLTR_API: import.meta.env
            .VITE_APP_GET_PROSTRUCTFLTR_APII,
        },
      },
    );
    return {
      structures: response.data || {},
      error: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      structures: null,
      error: true,
      serverError: isServerError,
    };
  }
};
export const filterUsersForReports = async (token, page) => {
  try {
    const response = await apiRequest.get(
      `/dashboard_api/filter_user/?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          GET_PROUSRFLTR_API: import.meta.env.VITE_APP_GET_PROUSRFLTR_API,
        },
      },
    );
    return {
      users: response.data || {},
      error: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;
    return {
      users: null,
      error: true,
      serverError: isServerError,
    };
  }
};

// minutes

export const getMinutesDetail = async (token, id) => {
  try {
    const response = await apiRequest.get(`/minutes_api/get_minute/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        GET_GMINS_API: import.meta.env.VITE_APP_GET_GMINS_API,
      },
    });
    return {
      minute: response.data || "",
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      minute: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getMinutesDocForPublic = async (hash) => {
  try {
    const response = await apiRequest.get(
      `/minutes_api/get_minutes_for_public_part/${hash}`,
      {
        headers: {
          GET_GMINSFPPTS_API: import.meta.env.VITE_APP_GET_GMINSFPPTS_API,
        },
      },
    );
    return {
      minute: response.data || "",
      error: null,
      loading: false,
      serverError: false,
    };
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      minute: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};
// minutes
export const fetchParticipantsApi = async () => {
  const token = sessionStorage.getItem("tID");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const [structRes, userRes] = await Promise.all([
    apiRequest.get("/minutes_api/filter_structure", {
      headers: {
        ...headers,
        GET_FSFMINS_API: import.meta.env.VITE_APP_GET_FSFMINS_API,
      },
    }),
    apiRequest.get("/minutes_api/filter_user", {
      headers: {
        ...headers,
        GET_FUFMINS_API: import.meta.env.VITE_APP_GET_FUFMINS_API,
      },
    }),
  ]);

  return {
    structures: structRes?.data,
    users: userRes?.data,
  };
};

export const fetchPreviewPdfApi = async (draftId) => {
  const token = sessionStorage.getItem("tID");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await apiRequest.get(
    `/minutes_api/preview_minutes/${draftId}`,
    {
      headers: {
        ...headers,
        GET_PMINS_API: import.meta.env.VITE_APP_GET_PMINS_API,
      },
    },
  );

  return response.data;
};

export const getAllMinutesAnalytics = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/minutes_api/get_all_minutes_analytics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GAMINS_API: import.meta.env.VITE_APP_GET_GAMINS_API,
          },
        },
      );
      return {
        allMinutesAnalytics: response?.data || {},
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        allMinutesAnalytics: {},
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      allMinutesAnalytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};

export const getParticipatedMinutesAnalytics = async (token) => {
  try {
    if (token) {
      const response = await apiRequest.get(
        `/minutes_api/get_minutes_participants_analytics`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            GET_GMINSPRPTS_API: import.meta.env.VITE_APP_GET_GMINSPRPTS_API,
          },
        },
      );
      return {
        partcipatedMinutesAnalytics: response?.data || {},
        error: null,
        loading: false,
        serverError: false,
      };
    } else {
      return {
        partcipatedMinutesAnalytics: {},
        error: null,
        loading: false,
        serverError: false,
      };
    }
  } catch (err) {
    const isServerError = !err.response || err.response.status >= 500;

    return {
      partcipatedMinutesAnalytics: {},
      error: err.response?.data || { message: "An unexpected error occurred" },
      loading: false,
      serverError: isServerError,
    };
  }
};