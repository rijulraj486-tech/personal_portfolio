"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  applyTheme,
  resolveTheme,
  saveThemePreference,
} from "@/components/providers/theme-initializer";
import { setTheme, type ThemePreference } from "@/store/slices/theme-slice";

const themeLabels: Record<ThemePreference, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

function getNextPreference(preference: ThemePreference): ThemePreference {
  if (preference === "system") {
    return "light";
  }

  return preference === "light" ? "dark" : "system";
}

export function ThemeToggle() {
  const dispatch = useAppDispatch();
  const preference = useAppSelector((state) => state.theme.preference);
  const resolvedTheme = useAppSelector((state) => state.theme.resolvedTheme);
  const nextPreference = getNextPreference(preference);

  const toggleTheme = () => {
    const nextTheme = resolveTheme(nextPreference);

    applyTheme(nextTheme);
    dispatch(setTheme({ preference: nextPreference, resolvedTheme: nextTheme }));
    saveThemePreference(nextPreference);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Theme preference: ${themeLabels[preference]}. Switch to ${themeLabels[nextPreference]} theme.`}
      title={`Switch to ${themeLabels[nextPreference]} theme`}
    >
      <span aria-hidden="true">{resolvedTheme === "dark" ? "☾" : "☀"}</span>
      <span>{themeLabels[preference]}</span>
    </button>
  );
}
