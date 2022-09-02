import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from "html5-qrcode";
import "./Qrreader.css";
import { DataStore } from "@aws-amplify/datastore";
import {UserData} from "./../models";

const qrConfig = {fps: 10, qrbox: {width: 200, height: 200}};

let html5QrCode;

const QrReader = ({items, setItems}) =>{

    const [result, setResult] = useState("");
    const [display, setDisplay] = useState(true);
    const [cancel, setCancel] = useState(false)

    async function onCreate(entry) {
        await DataStore.save(new UserData({ 
            name: entry["Name"],
            email: entry["Email Id"],
            phoneNumber: entry["Phone Number"],
            bookingId: entry["Booking Id"],
        }))
        // window.location.reload();
    }

    useEffect(()=>{
        html5QrCode = new Html5Qrcode("reader");
    }, []);
    
    const handleClickAdvanced = () =>{
        setResult("");
        setDisplay(false);
        setCancel(true)
        const qrCodeSuccessCallback = (decodeText, decodedResult)=>{
            const entryText = `{"${decodeText.replaceAll("\n",'","').replaceAll(": ",'":"')}"}`
            const entry = {...JSON.parse(entryText)}
            onCreate(entry);
            setResult(entry.Name);
            setItems([...items, entry]);
            handleStop();
        };
        
        html5QrCode.start(
            {facingMode: "environment"},
            qrConfig,
            qrCodeSuccessCallback
        );
            
    };

    const handleStop = () =>{
        
        try{
            html5QrCode.stop().then((res)=>{
                setDisplay(true);
                html5QrCode.clear();
            }).then(() => {
                setCancel(false);
            })
        }
        catch(err){
            console.log(err);
        }
    };
    return(
        <>
            <div className="qr-parent">
                <div className={display?"no-display":'qr-reader-container'}>
                    <div id="reader"/>
                </div>
                {cancel && <button className='button-styles' onClick={()=>handleStop()}>
                    Stop
                </button>}
                <button className='button-styles' onClick={()=>handleClickAdvanced()} 
                    style={display?{visibility:"visible"}:{visibility:"hidden"}}
                    >
                        SCAN
                </button>
                {result && 
                <div className='qr-reader-result' style={result?{border:"1px solid white"}:{border:"none"}}>
                        <span>{`${result} was succesfully registered.`}</span>
                </div>}
            </div>
        </>
        
    )
}

export default QrReader;