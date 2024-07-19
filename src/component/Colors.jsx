import React, { useState } from 'react'

function Colors() {
     const[color,setColor]= useState("black");
     function handleColor(event){
        setColor(event.target.value);
        console.log(event);
     }

  return (
    <div className='shadow-lg flex justify-center mt-2 items-center flex-col p-6  border-2 rounded-xl max-w-xl m-auto  '> 
        <h1>choose a color :</h1>
        <input type="color"  value={color} onChange={handleColor}/>
        <div  style={{backgroundColor:color}} className='w-56 h-40 rounded-full '></div>
        <p>your color is {color}</p>
        
    </div>
  )
}

export default Colors