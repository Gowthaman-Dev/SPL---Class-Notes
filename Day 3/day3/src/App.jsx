import React, { useState } from 'react'

const App = () => {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphone", price: 3000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Mouse", price: 800 },
    { id: 6, name: "Monitor", price: 12000 },
  ];

  const filterthis = products.filter((product)=>product.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
    <div>
      <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />

    </div>
    <div>
      {filterthis.length === 0 ? (<div>
        No one this there
      </div>):(
        filterthis.map((e,i)=>(<div key={i}>
          
          {e.name}
          {e.price}
        </div>))
      )}
    </div>
    </>
  )
}

export default App