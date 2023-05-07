import React from 'react'
import './CSS/EmployeeCard.css'
import left from './Images/left-arrow.png'
import right from './Images/right-arrow.png'

function EmployeeDetailsCard({id, name, phone, goBackword, goForward, profile}) {
  return (
    <>
      <div className="employee-container">
        <h2>EMS</h2>
        <div className='fb-button'>
          <i onClick={goBackword}><img src={left} alt="" /></i>
          <i onClick={goForward}><img src={right} alt="" /></i>
        </div>
        <img src={profile} alt="" /> 
        <div className="details">
          <span>Name: {name}</span> <br />
          <span>Id : {id}</span> <br />
          <span>Phone No : {phone}</span>
        </div>
        {/* <div className="date">
          <span>Day: Monday</span> <br />
          <span>Date: 13/02/2023</span>
        </div> */}
      </div>
    </>
  )
}

export default EmployeeDetailsCard
