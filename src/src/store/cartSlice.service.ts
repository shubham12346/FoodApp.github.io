import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type initialStateType = {
  items: any[];
  total: number;
};
const initialState: initialStateType = {
  items: [],
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addToCart: (state, action: PayloadAction<any>) => {
      state.items.push(action?.payload);
      state.total++;
    },
    removeItem: (state) => {
      state.items.pop();
      state.total--;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, clearCart, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
