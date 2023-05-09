import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface MainState {
  isLoading: boolean;
}

const initialState: MainState = {
  isLoading: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = mainSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMain = (state: RootState) => state.main.isLoading;

export default mainSlice.reducer;
