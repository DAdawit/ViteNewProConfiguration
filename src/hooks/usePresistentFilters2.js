import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

const usePersistentFilters = (
  routePath,
  storageKey,
  {
    searchKey = "name",         
    initialSearchValue = "",
    debounceMs = 500,
  } = {}
) => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Load from localStorage
  const loadStoredFilters = () => {
    if (location.pathname !== routePath) return null;
    const stored = localStorage.getItem(storageKey);
    if (!stored) return null;
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  };

  const stored = loadStoredFilters();

  // Search state (flexible key)
  const [search, setSearch] = useState(
    stored?.[searchKey] ?? searchParams.get(searchKey) ?? initialSearchValue
  );
  const [debouncedSearch] = useDebounce(search, debounceMs);

  // Standard filters
  const [sort, setSort] = useState(stored?.sort ?? searchParams.get("sort") ?? "-1");

  const [page, setPage] = useState(() => {
    const storedPage = stored?.page;
    if (storedPage !== undefined) {
      const p = parseInt(storedPage, 10);
      return !isNaN(p) && p > 0 ? p : 1;
    }
    const p = parseInt(searchParams.get("page") ?? "1", 10);
    return !isNaN(p) && p > 0 ? p : 1;
  });

  // Custom filters (status, category, type, etc.)
  const [customFilters, setCustomFilters] = useState(() => {
    const init = {};
    if (stored) {
      // Load all stored except reserved keys
      Object.entries(stored).forEach(([k, v]) => {
        if (!["page", "sort", searchKey].includes(k)) {
          init[k] = v;
        }
      });
    }
    // Override with current URL params (for shared links)
    searchParams.forEach((value, key) => {
      if (!["page", "sort", searchKey].includes(key)) {
        init[key] = value;
      }
    });
    return init;
  });

  // Sync to localStorage + URL
  useEffect(() => {
    if (location.pathname !== routePath) return;

    const filterObj = {
      [searchKey]: search,
      sort,
      page,
      ...customFilters,
    };
    localStorage.setItem(storageKey, JSON.stringify(filterObj));

    const params = new URLSearchParams();
    if (search) params.set(searchKey, search);
    if (sort && sort !== "-1") params.set("sort", sort);
    if (page > 1) params.set("page", page.toString());

    Object.entries(customFilters).forEach(([k, v]) => {
      if (v) params.set(k, v);
    });

    setSearchParams(params, { replace: true });
  }, [
    search,
    searchKey,
    sort,
    page,
    customFilters,
    location.pathname,
    routePath,
    setSearchParams,
  ]);

  // Validation & cleanup
  useEffect(() => {
    if (location.pathname !== routePath) return;

    let changed = false;
    const newParams = { ...Object.fromEntries(searchParams) };

    if (sort && !["-1", "1"].includes(sort)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSort("-1");
      newParams.sort = "-1";
      changed = true;
    }
    if (page < 1 || isNaN(page)) {
      setPage(1);
      delete newParams.page;
      changed = true;
    }

    if (changed) {
      setSearchParams(newParams, { replace: true });
      localStorage.setItem(
        storageKey,
        JSON.stringify({ [searchKey]: search, sort: "-1", page: 1, ...customFilters })
      );
    }
  }, [
    sort,
    page,
    search,
    searchKey,
    searchParams,
    setSearchParams,
    customFilters,
    location.pathname,
    routePath,
  ]);

  // Cleanup when leaving route
  useEffect(() => {
    if (!location.pathname.startsWith(routePath)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearch(initialSearchValue);
      setSort("-1");
      setPage(1);
      setCustomFilters({});
      localStorage.removeItem(storageKey);
      setSearchParams({}, { replace: true });
    }
  }, [location.pathname, setSearchParams, routePath, storageKey, initialSearchValue]);

  // Helpers
  const setFilter = (key, value) => {
    setCustomFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setSearch(initialSearchValue);
    setSort("-1");
    setPage(1);
    setCustomFilters({});
    localStorage.removeItem(storageKey);
    setSearchParams({}, { replace: true });
  };

  const withCurrentFilters = (path) => {
    const params = new URLSearchParams();
    if (search) params.append(searchKey, search);
    if (sort && sort !== "-1") params.append("sort", sort);
    if (page > 1) params.append("page", page);
    Object.entries(customFilters).forEach(([k, v]) => {
      if (v) params.append(k, v);
    });
    const query = params.toString();
    return query ? `${path}?${query}` : path;
  };

  return {
    // Search
    search,
    setSearch,
    debouncedSearch,

    // Standard
    page,
    setPage,
    sort,
    setSort,

    // Custom filters
    filters: customFilters,
    setFilter,

    // Utils
    handleClearFilters,
    withCurrentFilters,

    // Expose key for convenience (e.g. in fetch payload)
    searchKey,
  };
};

export default usePersistentFilters;