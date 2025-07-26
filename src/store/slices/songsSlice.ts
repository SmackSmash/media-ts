import { createSlice } from '@reduxjs/toolkit';

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
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
