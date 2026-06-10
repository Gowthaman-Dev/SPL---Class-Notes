import { useState } from "react"

const App = () => {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const [employees, setEmployees] = useState([]);

    const handlesubmit = (e) => {
        e.preventDefault()
        const newemploye = {
            name, department, salary
        }
        setEmployees([...employees, newemploye])
        setName("");
        setDepartment("");
        setSalary("");
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter Empolyee Name" onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Department" onChange={(e) => setDepartment(e.target.value)} />
                <input type="number" placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
                <button type="submit">Add This</button>
            </form>
            <div>
                {employees.length === 0 ? (<div>There Is No Record</div>) : (employees.map((e, i) => (
                    <div key={i}>
                        {e.name}
                        {e.department}
                        {e.salary}
                    </div>
                )))}
            </div>
        </>

    )
}

export default App