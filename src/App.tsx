import Button from './components/Button';

const App = () => {
  return (
    <div className='p-2'>
      <div className='flex items-center justify-between border-b-7 border-black pb-4'>
        <h1 className='font-rubik text-4xl tracking-tighter'>Media List</h1>
        <Button onClick={() => console.log('Hello there')}>Reset lists</Button>
      </div>
    </div>
  );
};

export default App;
