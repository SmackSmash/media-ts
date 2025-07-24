import Button from './components/Button';

const App = () => {
  return (
    <div className='p-2'>
      <h1 className='font-rubik mb-2 text-4xl tracking-tighter'>Media List</h1>
      <Button onClick={() => console.log('Hello there')}>Reset lists</Button>
    </div>
  );
};

export default App;
