// src/lib/react-query.js
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // retry once on failure
      refetchOnWindowFocus: false, // don't auto refetch on window focus
      staleTime: 1000 * 60, // data considered fresh for 1 min
    },
  },
});
