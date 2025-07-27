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
  },
  extraReducers: builder => {
    builder.addCase('movie/reset', () => console.log('Reset'));
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
