import { createSlice } from '@reduxjs/toolkit';

type MovieState = string[];
const initialState: MovieState = [];

const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.push(payload);
    },
    removeMovie: (state, { payload }) => {
      return state.filter((_movie, index) => index !== payload);
    }
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
