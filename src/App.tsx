import { useState } from 'react';
import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [songs, setSongs] = useState([]);

  return (
    <div className='p-2'>
      <div className='flex items-end justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button onClick={() => console.log('Hello there')}>Reset lists</Button>
      </div>
      <MovieList />
      <SongList />
    </div>
  );
};

export default App;
