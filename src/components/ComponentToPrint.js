import React from "react";
import QRCode from "react-qr-code";

export class ComponentToPrint extends React.PureComponent {
    render() {
      const { selectedItem, template } = this.props
      const details = {
        name: selectedItem['Name'],
        email: selectedItem['Email Id'],
        number: selectedItem['Phone Number'],
        bookingId: selectedItem['Booking Id'],
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
                <span className="print-text-resize">{selectedItem['Name']}</span>
              </div>
              <div className="print-box">
                <label>Email </label>
                <span className="print-text-resize">{selectedItem['Email Id']}</span>
              </div>
              <div className="print-box">
                <label>Number </label>
                <span className="print-text-resize">{selectedItem['Phone Number']}</span>
              </div>
              <div className="print-box">
                <label>Booking Id </label>
                <span className="print-text-resize">{selectedItem['Booking Id']}</span>
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