import React, { useEffect, useState } from 'react'
import EmployeeCard from './Components/EmployeeCard'
import Timeline from './Components/Timeline'
import './App.css'
import employeeData from './employee_data.json';
import profileImg2 from './Components/Images/image2.jpg';
import profileImg3 from './Components/Images/image3.jpg';
import profileImg4 from './Components/Images/image4.jpg';


function App() {

  const [index, setIndex] = useState(0);
  const [employee, setEmployee] = useState();
  const [edata] = useState(employeeData);

  let imgArr = [profileImg2, profileImg3, profileImg4];

  useEffect(() => {
    setEmployee(edata[index]);
  }, [edata, index]);

  const goForward = () => {
    if (index < edata.length -1) {
      setIndex(index + 1);
    }
    else {
      setIndex(0)
  }
  }

  const goBackword = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
    else {
      setIndex(edata.length-1)
  }
  }

  return (
    <div className='main-container'>
      {employee && (
        <>
          <EmployeeCard id={employee.id} name={employee.name} phone={employee.phone} profile={imgArr[index]} goBackword={goBackword} goForward={goForward} />
          <Timeline timelineData={employee.data} pdetails={employee.details} />
        </>
      )}

    </div>
  )
}

export default App
