import { useAppDispatch } from './store/hooks';
import { reset } from './store/actions';
import Button from './components/Button';
import MovieList from './components/MovieList';
import SongList from './components/SongList';

const App = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className='p-2'>
      <div className='mb-4 flex items-end justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button onClick={handleReset}>Reset lists</Button>
      </div>
      <MovieList />
      <SongList />
    </div>
  );
};

export default App;
