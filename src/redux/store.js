import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./Slices/movieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
