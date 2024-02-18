import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchvideos: [],
    isShowSearchVideos: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state) => {
      state.isMenuOpen = false;
    },
    searchVideo : (state,action) => {
      state.searchvideos = action.payload
    },
    toggleSearchScreen : (state) => {
      state.isShowSearchVideos = !state.isShowSearchVideos;
    }
  },
});

export const { toggleMenu, closeMenu,searchVideo,toggleSearchScreen } = appSlice.actions;
export default appSlice.reducer;
