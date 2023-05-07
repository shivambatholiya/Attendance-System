import React, { useState } from "react";
import "./CSS/TimelineItem.css";
import Modal from "./Modal";

function TimelineItem(props) {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  let style;
  if (props.index % 2 === 0) {
    style = {
      backgroundColor: "green",
    };
  } else {
    style = {
      backgroundColor: "red",
    };
  }
  // let time = props.index %2===0 ? props.ele.inTime : props.ele.outTime

  let { deductions, index, pdetails } = props;
  let prevPunch = index !== 0 && deductions[index - 1];

  return (
    <>
      {/* <div className="div1">
        <div className="timeline-item"> */}

      {/* if both present but prev outtime is not null*/}
      {props.ele.inTime && props.ele.outTime && prevPunch.outTime !== null && (
        <>
          <div className="div1">
            <div className="timeline-item">
              <div className="timeline-item-content">
                <span className="time">{props.ele.inTime}</span>
                <span
                  style={{ backgroundColor: "green" }}
                  onClick={showModal}
                  className="timeline-circle"
                ></span>
                <span className="punch">Punch-In</span>
                <div className="edge"></div>
              </div>
              {openModal && <Modal closeModal={closeModal} pdetails={pdetails}/>}
            </div>
          </div>
          <div className="div1">
            <div className="timeline-item">
              <div className="timeline-item-content">
                <span className="time">{props.ele.outTime}</span>
                <span
                  style={{ backgroundColor: "red" }}
                  onClick={showModal}
                  className="timeline-circle"
                ></span>
                <span className="punch">Punch-Out</span>
                {index < deductions.length - 1 && <div className="edge"></div>}
              </div>
              {openModal && <Modal closeModal={closeModal} pdetails={pdetails}/>}
            </div>
          </div>
        </>
      )}

      {/* if both present but prev out time is null*/}
      {props.ele.inTime && props.ele.outTime && prevPunch.outTime === null && (
        <>
          <div className="div1">
            <div className="timeline-item">
              <div className="timeline-item-content">
                <span className="time">{props.ele.outTime}</span>
                <span
                  style={{ backgroundColor: "red" }}
                  onClick={showModal}
                  className="timeline-circle"
                ></span>
                <span className="punch">Punch-Out</span>

                <div className="edge"></div>
              </div>
              {openModal && <Modal closeModal={closeModal} pdetails={pdetails}/>}
            </div>
          </div>
          <div className="div1">
            <div className="timeline-item">
              <div className="timeline-item-content">
                <span className="time">{props.ele.inTime}</span>
                <span
                  style={{ backgroundColor: "green" }}
                  onClick={showModal}
                  className="timeline-circle"
                ></span>
                <span className="punch">Punch-In</span>
                {index < deductions.length - 1 && <div className="edge"></div>}
              </div>
              {openModal && <Modal closeModal={closeModal} pdetails={pdetails}/>}
            </div>
          </div>
        </>
      )}

      {/* if only intime is present*/}
      {props.ele.inTime && !props.ele.outTime && (
        <div className="div1">
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="time">{props.ele.inTime}</span>
              <span
                style={{ backgroundColor: "green" }}
                onClick={showModal}
                className="timeline-circle"
              ></span>
              <span className="punch">Punch-In</span>
              {index < deductions.length - 1 && <div className="edge"></div>}
            </div>
            {openModal && <Modal closeModal={closeModal} pdetails={pdetails}/>}
          </div>
        </div>
      )}

      {/* if outtime is present*/}
      {!props.ele.inTime && props.ele.outTime && (
        <div className="div1">
          <div className="timeline-item">
            <div className="timeline-item-content">
              <span className="time">{props.ele.outTime}</span>
              <span
                style={{ backgroundColor: "red" }}
                onClick={showModal}
                className="timeline-circle"
              ></span>
              <span className="punch">Punch-Out</span>
              {index < deductions.length - 1 && <div className="edge"></div>}
            </div>
            {openModal && <Modal closeModal={closeModal} pdetails={pdetails} />}
          </div>
        </div>
      )}
      <div className="timeline-item-content">
        {/* <span className="time">{props.ele.inTime}</span>
          <span
            style={style}
            onClick={showModal}
            className="timeline-circle"
          ></span>
          {props.index + 1 < props.timelineData[0].deductions.length * 2 && (
            <div className="edge"></div>
          )}
          <span className="punch">Punch-In</span>

          <span className="time">{props.ele.outTime}</span> */}
        {/* <span style={style} onClick={showModal} className='timeline-circle'></span>
        {(props.index+1)*2 < props.timelineData[0].deductions.length*2 && <div className='edge'></div>}
        <span className='punch'>Punch-Out</span> */}
      </div>
      {/* {openModal && <Modal closeModal={closeModal} />} */}
      {/* </div>
      </div> */}
    </>
  );
}

export default TimelineItem;
