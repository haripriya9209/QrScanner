import React, { useState, useEffect } from 'react';
import './App.css';
import QrReader from './Qrreader';
import InstallPWA from './InstallApp';
import PrintComponent from './components/PrintComponent'
import Template from './components/Template'
import { DataStore } from "@aws-amplify/datastore";
import {UserData} from "./models";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports"; 

Amplify.configure(awsConfig);
function App() {

//   const getLocalItems = () =>{
//     let items_list = localStorage.getItem("list");
//     let empty_Array = [];
//     if(items_list){
//         return JSON.parse(localStorage.getItem("list"));
//     }
//     else{
//         return empty_Array;
//     }
//   }
//   const [items, setItems] = useState(getLocalItems);
  const [template, setTemplate] = useState()

//   useEffect(()=>{
//     localStorage.setItem("list", JSON.stringify(items));
// }, [items]);

const [items, setItems] = useState([]);
useEffect(() => { 
  fetchData();
  const subscription = DataStore.observe(UserData).subscribe(() => fetchData());
  
  return () => subscription.unsubscribe();
})

async function fetchData() {
  const data = await DataStore.query(UserData);
  setItems(data);
}

  return (
    <div className="App">
      <header className='header'>
        <InstallPWA/>
      </header>
      <div className="centered">
        <Template setTemplate={setTemplate} />
        <QrReader items={items} setItems={setItems}/>
        <PrintComponent items={items} template={template} setItems={setItems}/>
      </div>
      <div className="logo-container">
        <img className="logo" src="powered-by-logo.png" alt="logo"></img>
      </div>
    </div>
  );
}

export default App;
