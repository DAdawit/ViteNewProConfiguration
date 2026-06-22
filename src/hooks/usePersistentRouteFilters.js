import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const safeParseJSON = (v) => {
  try {
    return v ? JSON.parse(v) : null;
  } catch {
    return null;
  }
};

const isEmptyString = (v) => String(v ?? "").trim() === "";

const hasAnyManagedParams = (searchParams, spec) => {
  return Object.values(spec).some((f) => searchParams.has(f.key));
};

const readFromURL = (searchParams, spec) => {
  const out = {};
  for (const [name, f] of Object.entries(spec)) {
    const raw = searchParams.get(f.key);
    out[name] = f.parse ? f.parse(raw) : raw ?? f.default;
    if (out[name] === undefined || out[name] === null) out[name] = f.default;
  }
  return out;
};

const readFromStorage = (storageKey, spec) => {
  const obj = safeParseJSON(localStorage.getItem(storageKey)) || {};
  const out = {};
  for (const [name, f] of Object.entries(spec)) {
    const raw = obj[name];
    out[name] = f.parseStorage ? f.parseStorage(raw) : raw ?? f.default;
    if (out[name] === undefined || out[name] === null) out[name] = f.default;
  }
  return out;
};

const writeToStorage = (storageKey, values, spec) => {
  const payload = {};
  for (const [name] of Object.entries(spec)) {
    payload[name] = values[name];
  }
  localStorage.setItem(storageKey, JSON.stringify(payload));
};

const buildNextSearchParams = (currentSearchParams, nextValues, spec, { preserveUnmanaged = true } = {}) => {
  const next = preserveUnmanaged ? new URLSearchParams(currentSearchParams) : new URLSearchParams();

  for (const [name, f] of Object.entries(spec)) {
    const valRaw = nextValues[name];
    const val = f.serialize ? f.serialize(valRaw) : valRaw;

    const shouldOmit =
      typeof f.omit === "function"
        ? f.omit(val, nextValues)
        : val === undefined || val === null || isEmptyString(val);

    if (shouldOmit) next.delete(f.key);
    else next.set(f.key, String(val));
  }

  return next;
};


export function usePersistentRouteFilters({
  routeMatch,        
  storageKey,           
  spec,               
  preserveUnmanaged = true,
  restoreFromStorageWhenUrlEmpty = true,
}) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const [ready, setReady] = useState(false);
  const hydratedRef = useRef(false);
  const urlValues = useMemo(() => readFromURL(searchParams, spec), [searchParams, spec]);

  useEffect(() => {
    const active = !!routeMatch?.(location.pathname);
    if (!active) {
      hydratedRef.current = false;
      setReady(false);
      return;
    }
    if (hydratedRef.current) return;

    const urlHasAny = hasAnyManagedParams(searchParams, spec);

    if (!urlHasAny && restoreFromStorageWhenUrlEmpty) {
      const stored = readFromStorage(storageKey, spec);
      const next = buildNextSearchParams(searchParams, stored, spec, { preserveUnmanaged });

      const curStr = searchParams.toString();
      const nextStr = next.toString();

      if (curStr !== nextStr && nextStr) {
        setSearchParams(next, { replace: true });
      } 
    }

    hydratedRef.current = true;
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const active = !!routeMatch?.(location.pathname);
    if (!active || !ready) return;

    if (!hasAnyManagedParams(searchParams, spec)) return;

    const v = readFromURL(searchParams, spec);
    writeToStorage(storageKey, v, spec);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, ready, searchParams, spec, storageKey]);

  const setFilters = useCallback(
    (patch, { replace = true } = {}) => {
      const active = !!routeMatch?.(location.pathname);
      if (!active) return;

      const current = readFromURL(searchParams, spec);
      const merged = { ...current, ...patch };

      const next = buildNextSearchParams(searchParams, merged, spec, { preserveUnmanaged });
      const curStr = searchParams.toString();
      const nextStr = next.toString();

      if (curStr !== nextStr) {
        setSearchParams(next, { replace });
      }
    },
    [location.pathname, preserveUnmanaged, routeMatch, searchParams, setSearchParams, spec]
  );

  const resetFilters = useCallback((key) => {
    const defaults = {};
    for (const [name, f] of Object.entries(spec)) defaults[name] = f.default;
    setFilters(defaults, { replace: true });
    localStorage.removeItem(key)
  }, [setFilters, spec]);

  const filters = useMemo(() => {
    const active = !!routeMatch?.(location.pathname);
    if (!active) {
      const defaults = {};
      for (const [name, f] of Object.entries(spec)) defaults[name] = f.default;
      return defaults;
    }
    return urlValues;
  }, [location.pathname, routeMatch, urlValues, spec]);

  return {
    ready,
    filters,
    setFilters,
    resetFilters,
    queryString: searchParams.toString(),
  };
}
