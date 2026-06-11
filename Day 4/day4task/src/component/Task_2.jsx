import React from 'react'

const App = () => {
    const users = [
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" },
  ];

  const finddata = users.find((e)=>e.id ===2 )
  return (
    <>
    <h1>{finddata ?(<div className='bg-black text-2xl text-white '>
      <div>this is a Find Name And ID </div>
      ID : {finddata.id}    Name {finddata.name}
    </div>):(<div>No user Found</div>)}</h1>
    </>

    )
}

export default App