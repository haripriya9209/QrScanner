import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
// import QrReader from "./Qrreader/index";
import './Qrscan.css';

const QrScan = () =>{
    const[result, setResult] = useState("No result");

    const handleError = (err) =>{
        console.err(err);
    }

    const handleScan = (result) =>{
        console.log(result);
        if(result){
            setResult(result)
        }
    }
    const previewStyle = {
		height: "240px",
		width: "320px",
	}
    return(
        <div className='qr-container'>
            <QrReader
            style={previewStyle}
            // className='Qr-scanner'
            delay={500}
			onError={handleError}
			onScan={handleScan}
            />
            <div className='Qr-result'>
                {result}
            </div>
        </div>
    )
}
export default QrScan;

