import React from "react";

export class ComponentToPrint extends React.PureComponent {
    render() {
      const { selectedItem } = this.props
      console.log(selectedItem)

      return (
        <div className="preview">
          <div className="print-box">
            <label>Name: </label>
            <span>{selectedItem['Name']}</span>
          </div>
          <div className="print-box">
            <label>Email: </label>
            <span>{selectedItem['Email Id']}</span>
          </div>
          <div className="print-box">
            <label>Number: </label>
            <span>{selectedItem['Phone Number']}</span>
          </div>
          <div className="print-box">
            <label>Booking Id: </label>
            <span>{selectedItem['Booking Id']}</span>
          </div>
        </div>
      )
    }
  }