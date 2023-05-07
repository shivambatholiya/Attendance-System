import React, { useState } from 'react'
import './CSS/TimelineItem.css'
import Modal from './Modal'

function TimelineItem( props) {
    const [openModal, setOpenModal] = useState(false)
    const showModal = () => {
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }
    let style;
      if(props.index % 2 ===0) {
        style = {
          backgroundColor : "green"
        }
      }
      else {
        style = {
          backgroundColor : "red"
        }
      }
      // let time = props.index %2===0 ? props.ele.inTime : props.ele.outTime
    
    
  return (
    <div className='timeline-item' >
      <div className="timeline-item-content">
        <span className='time'>{props.ele.inTime}</span>
        <span style={style} onClick={showModal} className='timeline-circle'></span>
        {props.index+1 < props.timelineData[0].deductions.length*2 && <div className='edge'></div>}
        <span className='punch'>Punch-In</span>

        <span className='time'>{props.ele.outTime}</span>
        <span style={style} onClick={showModal} className='timeline-circle'></span>
        {(props.index+1)*2 < props.timelineData[0].deductions.length*2 && <div className='edge'></div>}
        <span className='punch'>Punch-In</span>
      </div>
      {openModal && <Modal closeModal={closeModal}/> }
    </div>
  )
}

export default TimelineItem
