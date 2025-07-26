import { configureStore } from '@reduxjs/toolkit';

export * from './slices/moviesSlice';
import moviesReducer from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
