import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addSong, removeSong } from '../store';
import Button from './Button';

const SongList: FC = () => {
  const songs = useAppSelector(({ songs }) => songs);
  const dispatch = useAppDispatch();

  const handleSongAdd = () => {
    let songName = `${faker.word.adjective()} ${faker.word.noun()}`;
    songName = songName.charAt(0).toUpperCase() + songName.slice(1);
    dispatch(addSong(songName));
  };

  const handleSongRemove = (songIndex: number) => {
    dispatch(removeSong(songIndex));
  };

  return (
    <div className='mb-4'>
      <div className='mb-2 flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl tracking-tighter'>Song Playlist</h2>
        <Button onClick={handleSongAdd}>+ Add Song</Button>
      </div>
      {songs.length ? (
        <ul className='flex flex-col gap-2'>
          {songs.map((song, index) => (
            <li
              key={index}
              className='flex items-center justify-between rounded-sm border-3 bg-green-400 p-4 shadow-[5px_5px_0_black] dark:bg-orange-400'
            >
              {song}
              <Button onClick={() => handleSongRemove(index)}>Remove</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs in list</p>
      )}
    </div>
  );
};

export default SongList;
