import type { FC } from 'react';
import Button from './Button';

const MovieList: FC<{ movies: string[]; onAdd: () => void }> = ({ movies, onAdd }) => {
  return (
    <div className='mb-4'>
      <div className='mb-2 flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Movie Playlist</h2>
        <Button onClick={onAdd}>+ Add Movie</Button>
      </div>
      {movies.length ? (
        <ul className='flex flex-col gap-2'>
          {movies.map((movie, index) => (
            <li
              key={index}
              className='flex items-center justify-between rounded-sm border-3 bg-green-400 p-4 shadow-[5px_5px_0_black] dark:bg-orange-400'
            >
              {movie}
              <Button>Remove</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies in list</p>
      )}
    </div>
  );
};

export default MovieList;
