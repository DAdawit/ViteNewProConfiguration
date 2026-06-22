// stores/useAppStore.js
import { create } from "zustand";

// Helper functions to load from localStorage
const loadThemeFromStorage = () => {
  try {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  } catch {
    return "light";
  }
};

const loadLanguageFromStorage = () => {
  try {
    const saved = localStorage.getItem("language");
    return saved ? saved : "am";
  } catch {
    return "am";
  }
};

const useAppStore = create((set, get) => ({
  // State
  language: loadLanguageFromStorage(),
  theme: loadThemeFromStorage(),
  title: "Dashboard",

  // Actions
  setLanguage: (language) => {
    set({ language });
    localStorage.setItem("language", language);
  },

  setTheme: (theme) => {
    console.log(theme);
    set({ theme });
    localStorage.setItem("theme", theme);

    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },

  setNavTitle: (title) => {
    set({ title });
  },

  // Getter functions
  getLanguage: () => get().language,
  getTheme: () => get().theme,
  getTitle: () => get().title,
}));

export default useAppStore;
