import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  mobileNavigationOpen: boolean;
};

const initialState: UiState = {
  mobileNavigationOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMobileNavigation: (state) => {
      state.mobileNavigationOpen = true;
    },
    closeMobileNavigation: (state) => {
      state.mobileNavigationOpen = false;
    },
    toggleMobileNavigation: (state) => {
      state.mobileNavigationOpen = !state.mobileNavigationOpen;
    },
  },
});

export const {
  closeMobileNavigation,
  openMobileNavigation,
  toggleMobileNavigation,
} = uiSlice.actions;

export default uiSlice.reducer;
