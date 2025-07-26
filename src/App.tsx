import Button from './components/Button';
import MovieList from './components/MovieList';
// import SongList from './components/SongList';

const App = () => {
  // const handleReset = () => {
  //   setMovies([]);
  //   setSongs([]);
  // };

  // const handleSongAdd = () => {
  //   let songName = `${faker.word.adjective()} ${faker.word.noun()}`;
  //   songName = songName.charAt(0).toUpperCase() + songName.slice(1);
  //   setSongs([...songs, songName]);
  // };

  // const handleSongRemove = (songIndex: number) => {
  //   setSongs(
  //     songs.filter((_song, index) => {
  //       return index !== songIndex;
  //     })
  //   );
  // };

  return (
    <div className='p-2'>
      <div className='mb-4 flex items-end justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button>Reset lists</Button>
      </div>
      <MovieList />
      {/* <SongList /> */}
    </div>
  );
};

export default App;
