import React from 'react'

const App = () => {
   const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Keyboard", price: 1500 },
  ];
  return (
    <>
    <div>
      {products.map((e,i)=>(<div key={i}>
        {e.name} {e.price}
      </div>))}
    </div>
    </>
    )
}

export default App