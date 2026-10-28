"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  setTheme,
  type ResolvedTheme,
  type ThemePreference,
} from "@/store/slices/theme-slice";

export const themeStorageKey = "portfolio-theme";

export function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "system";
}

export function resolveTheme(preference: ThemePreference): ResolvedTheme {
  if (preference !== "system") {
    return preference;
  }

  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function applyTheme(theme: ResolvedTheme) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
}

export function getSavedThemePreference(): ThemePreference {
  try {
    const storedPreference = window.localStorage.getItem(themeStorageKey);
    return isThemePreference(storedPreference) ? storedPreference : "system";
  } catch {
    return "system";
  }
}

export function saveThemePreference(preference: ThemePreference) {
  try {
    window.localStorage.setItem(themeStorageKey, preference);
  } catch {
    // Theme changes still apply for the current session when storage is unavailable.
  }
}

export function ThemeInitializer() {
  const dispatch = useAppDispatch();
  const preference = useAppSelector((state) => state.theme.preference);
  const hasInitialized = useRef(false);

  useEffect(() => {
    const nextPreference = hasInitialized.current ? preference : getSavedThemePreference();

    if (!hasInitialized.current) {
      hasInitialized.current = true;
    }

    const synchronizeTheme = (nextPreference: ThemePreference, nextTheme = resolveTheme(nextPreference)) => {
      applyTheme(nextTheme);
      dispatch(setTheme({ preference: nextPreference, resolvedTheme: nextTheme }));
    };

    synchronizeTheme(nextPreference);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === themeStorageKey) {
        const nextPreference = isThemePreference(event.newValue) ? event.newValue : "system";
        synchronizeTheme(nextPreference);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    if (nextPreference !== "system") {
      return () => window.removeEventListener("storage", handleStorageChange);
    }

    let mediaQuery: MediaQueryList;
    try {
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    } catch {
      return () => window.removeEventListener("storage", handleStorageChange);
    }

    const updateSystemTheme = (event: MediaQueryListEvent) => {
      synchronizeTheme("system", event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, [dispatch, preference]);

  return null;
}
