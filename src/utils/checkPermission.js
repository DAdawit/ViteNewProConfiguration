export const checkPermission = (
  userPermissions,
  actionPermission,
  type,
  isSuperAdmin = false,
) => {
  if (isSuperAdmin) return true;
  const hasPermission =
    type === "any"
      ? actionPermission?.some((perm) => userPermissions?.includes(perm))
      : actionPermission?.every((perm) => userPermissions?.includes(perm));

  return hasPermission;
};

export const hasPermission = (item, userPermissions, isSuperAdmin = false) => {
  if (isSuperAdmin) return true;
  if (item?.selfView === false) {
    return false;
  }

  if (!item?.permissions) return true;

  const permissions = Array.isArray(item?.permissions)
    ? item?.permissions
    : [item?.permissions];

  if (permissions?.includes("")) return true;

  if (item?.require === "all") {
    return permissions?.every((p) => userPermissions?.includes(p));
  }

  if (item?.require === "any") {
    return permissions?.some((p) => userPermissions?.includes(p));
  }

  return false;
};

export const filterSidebar = (links, userPermissions, isSuperAdmin = false) => {
  return links
    ?.map((link) => {
      if (link?.items) {
        const filteredItems = link?.items
          .map((item) => {
            if (item?.items) {
              const nestedItems = item?.items?.filter((child) =>
                hasPermission(child, userPermissions, isSuperAdmin),
              );

              if (nestedItems?.length === 0) return null;

              return { ...item, items: nestedItems };
            }

            return hasPermission(item, userPermissions, isSuperAdmin)
              ? item
              : null;
          })
          .filter(Boolean);

        if (filteredItems?.length === 0) return null;

        return { ...link, items: filteredItems };
      }

      return hasPermission(link, userPermissions, isSuperAdmin) ? link : null;
    })
    ?.filter(Boolean);
};

export const getFirstAllowedUrl = (
  links,
  userPermissions,
  isSuperAdmin = false,
) => {
  const filtered = filterSidebar(links, userPermissions, isSuperAdmin);
  if (!filtered || filtered.length === 0) return null;

  const findFirstUrl = (items) => {
    for (const item of items) {
      if (item.url && (!item.items || item.items.length === 0)) {
        return item.url;
      }
      if (item.items && item.items.length > 0) {
        const nested = findFirstUrl(item.items);
        if (nested) return nested;
      }
    }
    return null;
  };

  for (const group of filtered) {
    if (group.items) {
      const url = findFirstUrl(group.items);
      if (url) return url;
    } else if (group.url) {
      return group.url;
    }
  }

  return null;
};