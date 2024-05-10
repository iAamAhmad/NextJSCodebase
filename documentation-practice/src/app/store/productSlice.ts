import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: []; 
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    remove(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
