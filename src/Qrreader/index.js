import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from "html5-qrcode";
import "./Qrreader.css";

const qrConfig = {fps: 10, qrbox: {width: 200, height: 200}};

let html5QrCode;

const QrReader = () =>{

    const [result, setResult] = useState("");
    const [display, setDisplay] = useState(true);

    useEffect(()=>{
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = () =>{
        setResult("");
        setDisplay(false);

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
        setDisplay(true);
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
        <div>
            <div className={display?"no-display":'qr-reader-container'}>
                <div id="reader"/>
                
                {/* <button onClick={()=>handleStop()}>
                    Stops
                </button> */}
            </div>
            <button className='button-styles' onClick={()=>handleClickAdvanced()} 
                style={display?{visibility:"visible"}:{visibility:"hidden"}}
                >
                    Start Scanner
                </button>
            <div className='qr-reader-result' style={result?{border:"1px solid white"}:{border:"none"}}>
                    <a className='result-anchor-tag' target="_blank" href={result.includes("http")?result:false}>{result}</a>
            </div>
        </div>
        
    )
}

export default QrReader;