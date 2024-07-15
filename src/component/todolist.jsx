import React, { useState } from 'react'

function Todolist() {
    const [tasks,setTasks]=useState(["wake up ","shower ","study"]);
    const [task,setTask]=useState("");

    function handleInputChange(e){
        setTask(e.target.value);
        
        
    }
    function addTask(){
        if(task.trim() !== ""){
          setTasks(t => [...t,task]);
          setTask("");
        }
       }
    function remove(index){
      setTasks(tasks.filter((_,i)=>i !==index  ))
      
    }
    function moveTaskUp(index){
      if(index >0){
        const t=[...tasks];
        [t[index-1],t[index]]=[t[index],t[index-1]];
        setTasks(t);
      }
      }
    function moveTaskD(index){
      if(index<tasks.length -1){
        
          const t=[...tasks];
          [t[index+1],t[index]]=[t[index],t[index+1]];
          setTasks(t);
        
      }
    }


  return (
    
    <div className='text-center border-2 m-auto max-w-xl h-auto p-6 shadow-2xl rounded-3xl mt-3'>
    <h1  className='text-3xl '>To do List</h1>
    <input type="text"  placeholder='enter une tache' value={task} onChange={handleInputChange} className='text-center p-2 m-3 rounded-xl shadow-xl' /><br></br>
    <button type='submit' className='bg-green-600 w-32 rounded-xl m-3 p-2'  onClick={addTask}> Enregistrer </button>
    <ol >
    {tasks.map((task,index) =><li key={index} className='bg-slate-300 p-2 m-2 rounded-lg shadow-lg text-center'>{task} <button className='bg-red-700 rounded-lg w-24' onClick={()=>remove(index)}>delete</button>  
                                                     <button className='bg-green-400 w-16 rounded-2xl' onClick={()=>moveTaskUp(index)}>Up</button> 
                                                     <button  className='bg-orange-400 w-16 rounded-2xl' onClick={()=>moveTaskD(index)}>Down</button>                </li>)}
    </ol>
    </div>
    
  )
}

export default Todolist