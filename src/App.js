import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import './Qrscan/index'
import QrScan from './Qrscan/index';
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
        {/* <QrScan/> */}
      </div>
      
    </div>
  );
}

export default App;
