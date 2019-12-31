import React from 'react';
import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';

const App: React.FC = () => {
  return (
    <div className="App">
      <header >
        App Header
      </header>
      <div>
        <A />
      </div>
    </div>
  );
}

export default App;
