import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ThemePreference = "light" | "dark" | "system";
export type ResolvedTheme = Exclude<ThemePreference, "system">;

type ThemeState = {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
};

const initialState: ThemeState = {
  preference: "system",
  resolvedTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state.preference = action.payload.preference;
      state.resolvedTheme = action.payload.resolvedTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
