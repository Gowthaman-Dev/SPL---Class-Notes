import React, { useState } from "react";

const ProductCalculator = () => {
  const [form, setForm] = useState({
    productName: "",
    price: "",
    quantity: "",
  });

  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const price = Number(form.price);
    const quantity = Number(form.quantity);

    const result = price * quantity;

    setTotal(result);

    if (result > 5000) {
      setMessage("Discount Eligible");
    } else {
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Product Price Calculator</h2>

      <form onSubmit={handleCalculate}>
        <input
          type="text"
          name="productName"
          value={form.productName}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <br />
        <br />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <br />
        <br />

        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <br />
        <br />

        <button type="submit">Calculate</button>
      </form>

      <h3>Total Amount: {total}</h3>
      <h3>{message}</h3>
    </div>
  );
};

export default ProductCalculator;