import { createSlice } from "@reduxjs/toolkit";

const wishList = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
      console.log(action.payload);
      console.log("added to wishLIst");
    },
    removeFromWishlist(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishList.actions;

export default wishList.reducer;
