import React, { useState, useEffect } from 'react';
import './App.css';
import QrReader from './Qrreader';
import InstallPWA from './InstallApp';
import PrintComponent from './components/PrintComponent'

function App() {

  const getLocalItems = () =>{
    let items_list = localStorage.getItem("list");
    let empty_Array = [];
    if(items_list){
        return JSON.parse(localStorage.getItem("list"));
    }
    else{
        return empty_Array;
    }
  }
  const [items, setItems] = useState(getLocalItems);

  useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(items));
}, [items]);

  return (
    <div className="App">
      <header className='header'>
        <InstallPWA/>
      </header>
      <div className="centered">
        <QrReader items={items} setItems={setItems}/>
        <PrintComponent items={items} />
      </div>
      <div className="logo-container">
        <img className="logo" src="powered-by-logo.png" alt="logo"></img>
      </div>
    </div>
  );
}

export default App;
