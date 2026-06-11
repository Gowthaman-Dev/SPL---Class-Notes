import React from 'react'

const App = () => {
  const cart = [
    { product: "Laptop", price: 50000 },
    { product: "Mouse", price: 500 },
    { product: "Keyboard", price: 1500 },
  ];

  const reducestotalamont = cart.reduce((total,item)=> total+item.price,0)
  return (
    <>
    <div>
      {cart.map((e,i)=>(
        <div key={i}>
          {e.product}
          {e.price}
        </div>
      ))}
    </div>
    <div>
      Total amount {reducestotalamont}
    </div>
    </>
    )
}

export default App