import React, { useEffect, useState } from 'react'

function Dclock() {
   const[date,setDate]=useState(new Date());
   useEffect(()=>{
  const intervalID = setInterval(()=>{
        setDate(new Date());
    },1000);
    return ()=>{
        clearInterval(intervalID);
    }

   },[]);
   function formatTime(){
    const hours =date.getHours();
    const minutes =date.getMinutes();
    const secondes =date.getSeconds();
     return `${pad(hours)}:${pad(minutes)}:${pad(secondes)}`

    }
   function pad(number){
    return number < 10 ? "0"+number :""+ number
   }



    
  return (
    <>
     <h1 className='text-center text-7xl border-4 mt-2 mx-auto max-w-xl rounded-xl shadow-lg '>{formatTime()}</h1>
    </>
  )
}

export default Dclock