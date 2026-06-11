import React from "react";

const App = () => {
  const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Karthik", mark: 45 },
    { id: 3, name: "Vijay", mark: 92 },
    { id: 4, name: "Ajay", mark: 35 },
  ];

  // filter()
  const passedStudents = students.filter((student) => student.mark >= 50);

  // find()
  const studentDetails = students.find((student) => student.id === 3);

  // reduce() Total Marks
  const totalMarks = students.reduce(
    (total, student) => total + student.mark,
    0
  );

  // reduce() Average Marks
  const averageMark = totalMarks / students.length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      <h2>All Students (map)</h2>
      {students.map((student) => (
        <div key={student.id}>
          <p>
            ID: {student.id} | Name: {student.name} | Mark: {student.mark}
          </p>
        </div>
      ))}

      <hr />

      <h2>Passed Students (filter)</h2>
      {passedStudents.map((student) => (
        <div key={student.id}>
          <p>
            {student.name} - {student.mark}
          </p>
        </div>
      ))}

      <hr />

      <h2>Student with ID = 3 (find)</h2>
      <p>
        {studentDetails.name} - {studentDetails.mark}
      </p>

      <hr />

      <h2>Total Marks (reduce)</h2>
      <p>{totalMarks}</p>

      <hr />

      <h2>Average Mark (reduce)</h2>
      <p>{averageMark}</p>
    </div>
  );
};

export default App;