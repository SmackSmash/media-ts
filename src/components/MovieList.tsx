import Button from './Button';

const MovieList = () => {
  return (
    <div className='mb-4'>
      <div className='flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Movie Playlist</h2>
        <Button>Add Movie</Button>
      </div>
    </div>
  );
};

export default MovieList;
