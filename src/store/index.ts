import { configureStore } from '@reduxjs/toolkit';

export * from './slices/moviesSlice';
import moviesReducer from './slices/moviesSlice';

export * from './slices/songsSlice';
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
