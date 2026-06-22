const KEY = "ACTIVE_WORKSPACE_REF";

/**
 * Shape (HADMS - org-based context):
 * { orgId: "..." }   — the currently active organization
 * null                — no org selected (default/first org)
 */
export const setActiveWorkspaceRef = (ref) => {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(ref || null));
  } catch {
    return null;
  }
};

export const getActiveWorkspaceRef = () => {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const clearActiveWorkspaceRef = () => {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    return null;
  }
};
