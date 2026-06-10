import React, { useState } from 'react'

const App = () => {
  const [task,setTask] = useState('')
  const [tasks,setTasks] = useState([])

  const handleclick =()=>{

  }
  return (
    <>
    <input type="text" placeholder='Enter Something' onChange={(e)=>setTask(e.target.value)} value={task}/>
    <button onClick={handleclick}>Add Task</button>
    
    </>
  )
}

export default App