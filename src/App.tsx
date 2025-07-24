import { useState } from 'react';
import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';

const App = () => {
  const [movies, setMovies] = useState<string[]>([]);
  const [songs, setSongs] = useState<string[]>([]);

  const handleReset = () => {
    setMovies([]);
    setSongs([]);
  };

  const handleMovieAdd = () => {
    setMovies([...movies, 'Test']);
  };

  const handleMovieRemove = () => {};

  const handleSongAdd = () => {
    setSongs([...songs, 'Test']);
  };

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
