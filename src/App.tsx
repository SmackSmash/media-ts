import { useState } from 'react';
import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';
import { faker } from '@faker-js/faker';

const App = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [songs, setSongs] = useState<string[]>([]);

  const handleReset = () => {
    setMovies([]);
    setSongs([]);
  };

  const handleMovieAdd = () => {
    let movieName = `${faker.word.adjective()} ${faker.word.noun()}`;
    movieName = movieName.charAt(0).toUpperCase() + movieName.slice(1);
    setMovies([...movies, movieName]);
  };

  const handleMovieRemove = (movieIndex: number) => {
    setMovies(
      movies.filter((_movie, index) => {
        return index !== movieIndex;
      })
    );
  };

  const handleSongAdd = () => {
    let songName = `${faker.word.adjective()} ${faker.word.noun()}`;
    songName = songName.charAt(0).toUpperCase() + songName.slice(1);
    setSongs([...songs, songName]);
  };

  const handleSongRemove = (songIndex: number) => {
    setSongs(
      songs.filter((_song, index) => {
        return index !== songIndex;
      })
    );
  };

  return (
    <div className='p-2'>
      <div className='mb-4 flex items-end justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button onClick={handleReset}>Reset lists</Button>
      </div>
      <MovieList movies={movies} onAdd={handleMovieAdd} onRemove={handleMovieRemove} />
      <SongList songs={songs} onAdd={handleSongAdd} onRemove={handleSongRemove} />
    </div>
  );
};

export default App;
