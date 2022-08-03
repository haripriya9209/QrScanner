import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './Qrscan/index'
import QrScan from './Qrscan/index';
import QrReader from './Qrreader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{marginTop:"50px"}}>
          Welcome to Qr Scanner  
        </div> 
        {/* <QrScan/> */}
        <QrReader/>
      </header>
    </div>
  );
}

export default App;
