import React from "react";
import QRCode from "react-qr-code";

export class ComponentToPrint extends React.PureComponent {
    render() {
      const { selectedItem, template = 0 } = this.props
      const details = {
        name: selectedItem['name'],
        email: selectedItem['email'],
        number: selectedItem['phoneNumber'],
        bookingId: selectedItem['bookingId'],
      }
      console.log(JSON.stringify(details))
      return (
        <div className="preview">
          <div className="cand-info">
            {template === 0 && 
              <div className="qr-result">
                <QRCode value={JSON.stringify(details)} />
              </div>
            }
            <div className="print-box-container">
              <div className="print-box">
                <label>Name </label>
                <span className="print-text-resize">{selectedItem['name']}</span>
              </div>
              <div className="print-box">
                <label>Email </label>
                <span className="print-text-resize">{selectedItem['email']}</span>
              </div>
              <div className="print-box">
                <label>Number </label>
                <span className="print-text-resize">{selectedItem['phoneNumber']}</span>
              </div>
              <div className="print-box">
                <label>Booking Id </label>
                <span className="print-text-resize">{selectedItem['bookingId']}</span>
              </div>
            </div>
            {template === 1 && 
              <div className="qr-result">
                <QRCode value={JSON.stringify(details)} />
              </div>
            }
          </div>
          <div className="logo-container">
            <img className="logo" src="powered-by-logo.png" alt="logo"></img>
          </div>
        </div>
      )
    }
  }