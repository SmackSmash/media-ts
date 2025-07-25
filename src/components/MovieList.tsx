import type { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../store';
import Button from './Button';
import { faker } from '@faker-js/faker';

const MovieList: FC = () => {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const handleMovieAdd = () => {
    let movieName = `${faker.word.adjective()} ${faker.word.noun()}`;
    movieName = movieName.charAt(0).toUpperCase() + movieName.slice(1);
    dispatch(addMovie(movieName));
  };

  const handleMovieRemove = (movieIndex: number) => {
    setMovies(
      movies.filter((_movie, index) => {
        return index !== movieIndex;
      })
    );
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
              <Button onClick={() => onRemove(index)}>Remove</Button>
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
