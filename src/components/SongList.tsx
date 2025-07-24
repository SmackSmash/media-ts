import type { FC } from 'react';
import Button from './Button';

const SongList: FC<{ songs: string[]; onAdd: () => void }> = ({ songs, onAdd }) => {
  return (
    <div className='mb-4'>
      <div className='flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Song Playlist</h2>
        <Button onClick={onAdd}>+ Add Song</Button>
      </div>
      {songs.length ? (
        <ul>
          {songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      ) : (
        <p>No songs in list</p>
      )}
    </div>
  );
};

export default SongList;
