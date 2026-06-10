import React, { useState } from "react";

function SalaryBonus() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [bonus, setBonus] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();

    let sal = Number(salary);
    let bonusValue = 0;

    if (sal > 30000) {
      bonusValue = 5000;
    } else if (sal > 20000) {
      bonusValue = 3000;
    } else {
      bonusValue = 1000;
    }

    setBonus(bonusValue);
    setFinalSalary(sal + bonusValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Employee Salary Bonus Calculator</h2>

      <form onSubmit={handleCalculate}>
        <div>
          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Calculate</button>
      </form>

      <hr />

      <h3>Employee: {name}</h3>
      <h3>Bonus: {bonus}</h3>
      <h3>Final Salary: {finalSalary}</h3>
    </div>
  );
}

export default SalaryBonus;