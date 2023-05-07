import React, { useState } from 'react'
import './CSS/EmployeeCard.css'
import img1 from './Images/image2.jpg'
import img2 from './Images/image3.jpg'
import img3 from './Images/image4.jpg'
import left from './Images/left-arrow.png'
import right from './Images/right-arrow.png'
import edata from '../empData'


function EmployeeCard() {
  const [index, setIndex] = useState(0);
  let imgArr = [img1, img2, img3];
  const goBackword= () => {
    if(index===0) {
    setIndex(edata.length-1);
    } else {
      setIndex(index-1)
    }
  }; 
  const goForward= () => {console.log('j');
    if(index < edata.length-1){
      setIndex(index+1);
    } else {
      setIndex(0)
    }
  }; 

  return (
    <>
      <div className="employee-container">
        <h2>EMS</h2>
        <div className='fb-button'>
          <i onClick={goBackword}><img src={left} alt="" /></i>
          <i onClick={goForward}><img src={right} alt="" /></i>
        </div>
        <img src={imgArr[index]} alt="" /> 
        <div className="details">
          <span>Name: {edata[index].name}</span> <br />
          <span>Id : {edata[index].id}</span> <br />
          <span>Phone No : {edata[index].phone}</span>
        </div>
        <div className="date">
          <span>Day: Monday</span> <br />
          <span>Date: 13/02/2023</span>
        </div>
      </div>
    </>
  )
}

export default EmployeeCard
