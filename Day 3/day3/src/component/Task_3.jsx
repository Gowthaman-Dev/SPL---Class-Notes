import React, { useEffect, useState } from 'react'

const App = () => {
  const [datas,setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) =>{
      if (!res.ok) {
        throw new Error("Fetch Data Failed")
      }
      return res.json()
    })
    .then(data=>{
      setData(data)
      setLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setLoading(false)
    })
  }, [])
  return (

    <>
    {loading ? (<div>Loading..............</div>):error?(<h1>{error}</h1>):(<div>
      {datas.map((e,i)=>(<div key={i}>
        {e.name}
        {e.email}
        {e.company.name}
      </div>))}
    </div>)}
    </>

  )
}

export default App