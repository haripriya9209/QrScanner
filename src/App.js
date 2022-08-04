import React from 'react';
import './App.css';
import QrReader from './Qrreader';
import InstallPWA from './InstallApp';

function App() {
  
  return (
    <div className="App">
      <header className='header'>
        <InstallPWA/>
      </header>
      <div className="centered">
        <h3>Welcome to Scanner App</h3>
        <QrReader/>
      </div>
    </div>
  );
}

export default App;
