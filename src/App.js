import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QrScan from './Qrscan/index';
import QrReader from './Qrreader';
import InstallPWA from './InstallApp';
import ListItem from './ListItem';

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
        <h3>Welcome to Scanner App</h3>
        <QrReader items={items} setItems={setItems}/>
        {/* <QrScan/> */}
      </div>
      <ListItem items={items}/>
    </div>
  );
}

export default App;
