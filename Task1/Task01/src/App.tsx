import React from 'react';
import Navbar from './components/Navbar';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className='bg-blue-500 w-full h-screen flex items-center justify-center text-5xl '>
        <h2 className='text-black '>Hello World</h2>
      </div>
    </div>
  );
}

export default App;
