import { useState } from 'react';
import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [songs, setSongs] = useState([]);

  const handleReset = () => {
    setMovies([]);
    setSongs([]);
  };

  const handleMovieAdd = () => {};

  const handleMovieRemove = () => {};

  const handleSongAdd = () => {};

  const handleSongRemove = () => {};

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
