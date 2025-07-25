import { configureStore, createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie: (state, { payload }) => {
      state.push(payload);
    },
    removeMovie: (state, { payload }) => {
      return state.filter((_movie, index) => {
        return index !== payload;
      });
    }
  }
});

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default store;
