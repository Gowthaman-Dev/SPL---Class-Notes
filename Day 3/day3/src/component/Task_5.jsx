import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [search,setSearch] = useState('')
  const prevalue = useRef('')

  useEffect(()=>{
    prevalue.current = search
  },[search])
  
  return (
    <>
    <input type="text" placeholder='Enter the Value' onChange={(e)=>setSearch(e.target.value)} value={search}/>

    <div>Current Value : {search}</div>
    <div>Previous Value : {prevalue.current}</div>
    </>
    )
}

export default App