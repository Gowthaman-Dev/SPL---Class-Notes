import React from "react";

const App = () => {
  const orders = [
    { id: 1, customer: "John", amount: 5000, status: "Completed" },
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
    { id: 3, customer: "Sam", amount: 7000, status: "Completed" },
    { id: 4, customer: "Peter", amount: 2000, status: "Pending" },
  ];

  // filter()
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  // find()
  const orderDetails = orders.find((order) => order.id === 3);

  // reduce()
  const totalRevenue = orders.reduce(
    (total, order) => total + order.amount,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Order Management System</h1>

      <h2>All Orders (map)</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            ID: {order.id} | Customer: {order.customer} | Amount: ₹
            {order.amount} | Status: {order.status}
          </p>
        </div>
      ))}

      <hr />

      <h2>Completed Orders (filter)</h2>
      {completedOrders.map((order) => (
        <div key={order.id}>
          <p>
            {order.customer} - ₹{order.amount}
          </p>
        </div>
      ))}

      <hr />

      <h2>Order ID = 3 (find)</h2>
      <p>
        Customer: {orderDetails.customer} | Amount: ₹
        {orderDetails.amount}
      </p>

      <hr />

      <h2>Total Revenue (reduce)</h2>
      <p>₹{totalRevenue}</p>
    </div>
  );
};

export default App;