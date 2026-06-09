import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    mark: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mark = Number(form.mark);
    let grade = "";

    if (mark >= 90) {
      grade = "A";
    } else if (mark >= 75) {
      grade = "B";
    } else if (mark >= 50) {
      grade = "C";
    } else {
      grade = "Fail";
    }

    setResult(`Student: ${form.name} - Grade: ${grade}`);
  };

  return (
    <div>
      <h2>Student Grade System</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Student Name"
        />

        <br />
        <br />

        <input
          type="number"
          name="mark"
          value={form.mark}
          onChange={handleChange}
          placeholder="Enter Marks"
        />

        <br />
        <br />

        <button type="submit">Get Grade</button>
      </form>

      <h3>{result}</h3>
    </div>
  );
};

export default App;