import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, { payload }) => {
      state.push(payload);
    },
    removeMovie: (state, action) => {}
  }
});

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default store;
