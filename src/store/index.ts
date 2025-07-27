import { configureStore } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

export const reset = createAction('app/reset');

import moviesReducer from './slices/moviesSlice';
import songsReducer from './slices/songsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    songs: songsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
