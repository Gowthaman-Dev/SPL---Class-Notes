import React, { useState } from 'react'

const App = () => {
  const [toggle,setToggle] = useState(true)

  const handleclick =()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className={`${toggle ?'bg-black text-white ':'text-black bg-white '}`}>
      <h1 >Gowtham</h1>
      <button className='bg-red-400 text-2xl text-white' onClick={handleclick}>Theme Color</button>    
    </div>
    </>
    )
}

export default App