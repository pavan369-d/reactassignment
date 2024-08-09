import React, { useEffect } from 'react';

import { useState } from 'react';

const Timmer = ({setTimeCount,newEndTime}) => {
  const [time,setTimeLeft]=useState([]);
  
  const calculateTimLeft=(newEndTime)=>{
  
    const currentTime=new Date().getTime();
    const endTime=new Date(newEndTime).getTime();
    const gap=endTime-currentTime;

    const seconds=1000;
    const minutes=seconds*60;
    const hours = minutes*60;
    const days=hours*24;

    const remainingDays=Math.floor((gap/days));
    const remainingHours= Math.floor((gap%days)/hours);
    const remainingMinutes= Math.floor((gap%hours)/minutes);
    const remainingSeconds=Math.floor((gap%minutes)/seconds);
  
    return {
      days:remainingDays,
      hours:remainingHours,
      minutes:remainingMinutes,
      seconds:remainingSeconds,
    }

  }

  useEffect(()=>{
 
   const counttime=setTimeout(()=>{
    setTimeLeft(calculateTimLeft(newEndTime))
    setTimeCount(time);
   },1000)
   
  

   return ()=>clearTimeout(counttime);
  },[time])

  return (
    <div>
           <table>
              <thead>
              <tr>
              <th><span>days</span></th>
                <th><span>Hours</span></th>
                <th><span>Minutes</span></th>
                <th><span>Seconds</span></th>
              </tr>
              </thead>
             <tbody>
             {
              time ? 
              (
                <tr>
                <td>{time.days}</td>
                <td>{time.hours}</td>
                <td>{time.minutes}</td>
                <td>{time.seconds}</td>
              </tr>
              ):
              (
                ''
              )
             }
             </tbody>
            </table>
    </div>
  )
}

export default Timmer
