import Button from './Button';

const SongList = () => {
  return (
    <div className='mb-4'>
      <div className='flex w-full items-end justify-between border-b-4 pb-2'>
        <h2 className='font-rubik text-2xl'>Song Playlist</h2>
        <Button>Add Song</Button>
      </div>
    </div>
  );
};

export default SongList;
