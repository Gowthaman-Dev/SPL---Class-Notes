import React from 'react'

const App = () => {
  const employees = [
    { id: 1, name: "John", salary: 25000 },
    { id: 2, name: "David", salary: 45000 },
    { id: 3, name: "Sam", salary: 60000 },
    { id: 4, name: "Peter", salary: 30000 },
  ];

  const filterdata = employees.filter((e)=>e.salary > 40000)
  return (
    <>
    <div>
      Task 1 
    </div>
    <div>
      {filterdata.length > 0 ? (filterdata.map((e,i)=>(<div key={i}>empolye name {e.name} <div>
        Salaay : {e.salary}</div></div>))):(<div>No Data Found</div>)}
    </div>
    </>
  )
}

export default App