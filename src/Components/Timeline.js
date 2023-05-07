import React, { useEffect, useState } from 'react'
import './CSS/Timeline.css'
import TimelineItem from './TimelineItem'
import left from './Images/left-arrow.png'
import right from './Images/right-arrow.png'

function Timeline({ timelineData, pdetails }) {
    // timelineData is employee.data 
    // timelineData[0] is the data of first date

    const [data, setData] = useState(timelineData[0]);
    const [index, setIndex] = useState(0);
    const [status, setStatus] = useState()

    useEffect(() => {
        setData(timelineData[index]);
    }, [timelineData, index]);

    useEffect(() => {
        if(data.deductions.length === 0) {
        setStatus("Absent")
        }
        else if(data.deductions[data.deductions.length-1].inTime !== null && 
            data.deductions[data.deductions.length-1].outTime !== null) {
            setStatus("Incomplete")
        }
        else if(data.deductions[data.deductions.length-1].inTime !== null && 
            data.deductions[data.deductions.length-1].outTime === null) 
        {
            setStatus("Inconclusive")
        }
        else {
            setStatus("Present")
        }

        

        
    }, [data])

    const goForward = () => {
        if (index < timelineData.length - 1) {
            setIndex(index + 1);
        }
        
    }

    const goBackword = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
        
    }

    
    return (
        <>
            <div className="outer-container">
                <div className="gray-circle"></div>
                <span>Admin/Employees/Tech Inject</span>
                <div className="inner-container">

                    <div className="left-container">
                        <div className="timeline-container-header">
                            <h2>Timeline</h2>
                            <div className='fb-button'>
                                <i onClick={goBackword}><img src={left} alt="" /></i>
                                <span className='current-date'> Date : {data.date}</span>
                                <i onClick={goForward}><img src={right} alt="" /></i>
                            </div>
                        </div>
                        
                        <div className="timeline-container">
                            {
                                data.deductions.length === 0 ? 
                                <span className='no-data'>No Data Found</span> :
                                data && data.deductions.map((ele, indx) => (
                                    <TimelineItem 
                                    key={indx} 
                                    ele={ele} 
                                    timelineData={data} 
                                    index={indx} 
                                    deductions={data.deductions}
                                    pdetails= {pdetails}/>
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
                          

                    <span>Status : {status}</span>
                </div>
            </div>
        </>
    )
}

export default Timeline
