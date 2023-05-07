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
          </div> <hr />
        </div>
      </div>
    </>
  )
}

export default Modal
