import React from 'react'
import './CSS/Modal.css'

function Modal(props) {
  return (
    <>
      <div className="modal-wrapper" onClick={props.closeModal}>
        <div className="modal-container">
          <div className="modal-header">
            <span>Data</span>
            <span onClick={props.closeModal} className='close-icon'>&times;</span> 
          </div> <hr /> <br />
          <div className="modal-content">
            <h2>Scan Type : {props.pdetails["Scan Type"]}</h2> <br />
            <h2>Machine Id : {props.pdetails["Machine Id"]}</h2> <br />
            <h2>Total Time : {props.pdetails["Total Time"]}</h2> <br />
            <h2>Exemption : 00:00</h2> <br />
            <h2>Deduction : 00:00</h2> <br />

          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
