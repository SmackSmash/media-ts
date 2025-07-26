import { createSlice } from '@reduxjs/toolkit';

type SongState = string[];
const initialState: SongState = [];

const songsSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    addSong: (state, action) => {},
    removeSong: (state, action) => {}
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
