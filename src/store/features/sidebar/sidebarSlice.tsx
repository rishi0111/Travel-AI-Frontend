import { createSlice } from "@reduxjs/toolkit";
interface SidebarState {
     activeSidebar: string;
}

const initialState: SidebarState = {
     activeSidebar: ""
};

const sidebarSlice = createSlice({
     name: "sidebar",
     initialState,
     reducers: {
          setActiveSidebar: (state, action) => {
               state.activeSidebar = action.payload;
          },
     },
});

export const { setActiveSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
