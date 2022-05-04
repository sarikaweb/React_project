import React, { Component, useState } from 'react';




const DigiClock = () =>  {
 
    let time = new Date().toLocaleString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateDateTime = () =>{
        time = new Date().toLocaleString();
        setCurrentTime(time);
    };
    setInterval(updateDateTime, 1000);
    return (
        <>
         <div className='date-time'>
             <h1>Clock Here</h1>

             <h6>{currentTime}</h6>
             <button onClick={updateDateTime}>Update Time</button>
         </div>
      </>
    )

}

export default DigiClock;