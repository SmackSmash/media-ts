import type { FC } from 'react';
import Button from './Button';

const SongList: FC = () => {
  return (
    <div className='mb-4'>
      <div className='mb-2 flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Song Playlist</h2>
        <Button onClick={onAdd}>+ Add Song</Button>
      </div>
      {songs.length ? (
        <ul className='flex flex-col gap-2'>
          {songs.map((song, index) => (
            <li
              key={index}
              className='flex items-center justify-between rounded-sm border-3 bg-green-400 p-4 shadow-[5px_5px_0_black] dark:bg-orange-400'
            >
              {song}
              <Button onClick={() => onRemove(index)}>Remove</Button>
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
