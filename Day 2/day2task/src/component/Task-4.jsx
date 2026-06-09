import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    salary: "",
  });

  const [bonus, setBonus] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const salary = Number(form.salary);

    let bonusAmount = 0;

    if (salary > 30000) {
      bonusAmount = 5000;
    } else if (salary > 20000) {
      bonusAmount = 3000;
    } else {
      bonusAmount = 1000;
    }

    setBonus(bonusAmount);
    setFinalSalary(salary + bonusAmount);
  };

  return (
    <div>
      <h2>Employee Salary Bonus System</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Employee Name"
        />

        <br />
        <br />

        <input
          type="number"
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="Enter Salary"
        />

        <br />
        <br />

        <button type="submit">Calculate Bonus</button>
      </form>

      <h3>Bonus: {bonus}</h3>
      <h3>Final Salary: {finalSalary}</h3>
    </div>
  );
};

export default App;