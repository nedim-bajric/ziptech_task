import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fav: JSON.parse(localStorage.getItem("movies"))
    ? JSON.parse(localStorage.getItem("movies"))
    : [],
};
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      state.fav = action.payload;
    },
  },
});

export const { addToFav } = movieSlice.actions;

export default movieSlice.reducer;
