import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

type SongState = string[];
const initialState: SongState = [];

const songsSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state, { payload }) => {
      state.push(payload);
    },
    removeSong: (state, { payload }) => {
      return state.filter((_song, index) => index !== payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(reset, () => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
