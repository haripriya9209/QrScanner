import React, { useState } from 'react';
import { Modal } from 'react-rainbow-components';

const Template = ({setTemplate}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [tempSelect, setTempSelect] = useState(0)

    const handleOnOpen = () => {
        setIsOpen(true)
    }

    const handleOnClose = () => {
        setIsOpen(false)
    }

    const handleTempSelect = (temp) => {
        setIsOpen(false)
        setTempSelect(temp)
        setTemplate(temp)
    }

  return (
    <div className="template-container">
        <button onClick={handleOnOpen} className="template-button">Templates</button>
        <Modal id="modal" isOpen={isOpen} onRequestClose={handleOnClose}>
            <div className="modal">
                <div onClick={() => handleTempSelect(0)} className={tempSelect === 0 ? "design-template design-template-selected" : "design-template"}>
                    <img alt="modal-img" className="qr-image" src='qr-code.png'></img>
                    <img alt="modal-img" className="modal-img" src='empty-rows.png'></img>
                </div>
                <div onClick={() => handleTempSelect(1)} className={tempSelect === 1 ? "design-template design-template-selected" : "design-template"}>
                    <img alt="modal-img" className="modal-img" src='empty-rows.png'></img>
                    <img alt="modal-img" className="qr-image" src='qr-code.png'></img>
                </div>
            </div>
        </Modal>
    </div>
  )
}

export default Template