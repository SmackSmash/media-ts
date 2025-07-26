import type { FC } from 'react';
import { faker } from '@faker-js/faker';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addMovie, removeMovie } from '../store/slices/moviesSlice';
import Button from './Button';

const MovieList: FC = () => {
  const movies = useAppSelector(({ movies }) => movies);
  const dispatch = useAppDispatch();

  const handleMovieAdd = () => {
    let movieName = `${faker.word.adjective()} ${faker.word.noun()}`;
    movieName = movieName.charAt(0).toUpperCase() + movieName.slice(1);
    dispatch(addMovie(movieName));
  };

  const handleMovieRemove = (index: number) => {
    dispatch(removeMovie(index));
  };

  return (
    <div className='mb-4'>
      <div className='mb-2 flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Movie Playlist</h2>
        <Button onClick={handleMovieAdd}>+ Add Movie</Button>
      </div>
      {movies.length ? (
        <ul className='flex flex-col gap-2'>
          {movies.map((movie, index) => (
            <li
              key={index}
              className='flex items-center justify-between rounded-sm border-3 bg-green-400 p-4 shadow-[5px_5px_0_black] dark:bg-orange-400'
            >
              {movie}
              <Button onClick={() => handleMovieRemove(index)}>Remove</Button>
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
