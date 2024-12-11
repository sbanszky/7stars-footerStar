import React from 'react';
import StarNetwork from './components/StarNetwork';

function App() {
  return (
    <div className="w-full h-screen">
      <header className="absolute w-full text-center z-10 p-4">
        <a 
          href="https://allnumbers012.online" 
          className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 
                     bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          allnumbers012.online
        </a>
      </header>
      <StarNetwork />
    </div>
  );
}

export default App;