import React from 'react'
import './CSS/Timeline.css'
import timelineData from '../data_timeline.json'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <>
        <div className="outer-container">
            <div className="circle"></div>
            <span>Admin/Employees/Tech Inject</span>
            <div className="inner-container">

                <div className="left-container">
                    <h2>Timeline</h2>
                    <div className="timeline-container">
                        {
                            timelineData[0].deductions.map((ele, indx) => (
                                <TimelineItem key={indx} ele={ele} timelineData={timelineData} index= {indx}/>
                            ))
                        }
                    </div>
                </div>

                <div className="right-container">
                    <h2>Day Details</h2>
                    <div className='todays-detail'>
                        <p>Total Present Time : 08:30</p>
                        <p>Total Absent Time : 00:30</p>
                        <p>Total Exemption : 00:00</p>
                        <p>Total Deduction : 00:00</p>
                    </div>
                </div>

                <span>Status : Present</span>
            </div>
        </div>
    </>
  )
}

export default Timeline
