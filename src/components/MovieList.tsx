import type { FC } from 'react';
import Button from './Button';

const MovieList: FC<{ movies: string[]; onAdd: () => void }> = ({ movies, onAdd }) => {
  return (
    <div className='mb-4'>
      <div className='flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Movie Playlist</h2>
        <Button onClick={onAdd}>+ Add Movie</Button>
      </div>
      {movies.length ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      ) : (
        <p>No movies in list</p>
      )}
    </div>
  );
};

export default MovieList;
