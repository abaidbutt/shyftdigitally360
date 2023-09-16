import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    settingsModalOpen: false,
    favouriteNotes: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.favouriteNotes.push(action.payload);
    },
    toggleSettingsModal: (state) => {
      state.settingsModalOpen = !state.settingsModalOpen;
    },
  },
});

export const { addFavourite, toggleSettingsModal } = authSlice.actions;

export default authSlice;
