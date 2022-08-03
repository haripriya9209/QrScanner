import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from "html5-qrcode";
// export { Html5Qrcode } from "./html5-qrcode";
import "./Qrreader.css";

const qrConfig = {fps: 10, qrbox: {width: 200, height: 200}};

let html5QrCode;

const QrReader = () =>{

    const [result, setResult] = useState("Click start to scan");

    useEffect(()=>{
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = () =>{
        setResult("");
        const qrCodeSuccessCallback = (decodeText, decodedResult)=>{
            setResult(decodeText);
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
                html5QrCode.clear();
            })
        }
        catch(err){
            console.log(err);
        }
    };
    return(
        <div className='qr-reader-container'>
            <div id="reader" className='qr-reader-camera'/>
                <button className='button-styles' onClick={()=>handleClickAdvanced()} style={result?{visibility:"visible"}:{visibility:"hidden"}}>
                    Start Scanner
                </button>
                {/* <button onClick={()=>handleStop()}>
                    Stops
                </button> */}
                <div className='qr-reader-result'>
                    <a className='result-anchor-tag' target="_blank" href={result.includes("http")?result:false}>{result}</a>
                </div>
        </div>
    )
}

export default QrReader;