import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';

const App = () => {
  const handleReset = () => {};

  return (
    <div className='p-2'>
      <div className='mb-4 flex items-end justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button>Reset lists</Button>
      </div>
      <MovieList />
      <SongList />
    </div>
  );
};

export default App;
