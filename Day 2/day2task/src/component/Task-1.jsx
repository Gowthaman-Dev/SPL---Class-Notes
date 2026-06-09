import React, { useState } from 'react'

const App = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()
        if (email.trim() === "") {
            setMsg("Email REquried")
        } else if (password.length < 6) {
            setMsg("Must Password Write 6 Letter")
        } else {
            setMsg("SuccessFully Logined")
        }
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='emial' />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' />
                <button type='submit'>Login</button>
            </form>

            {msg}
        </>
    )
}

export default App


//--------------------------------------------------------------------------------------------

//Method 02

import React, { useState } from "react";

const App = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.email.trim() === "") {
            setMsg("Email Required");
        } else if (form.password.length < 6) {
            setMsg("Password must be at least 6 characters");
        } else {
            setMsg("Login Successfully");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <br />
                <br />

                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                />

                <br />
                <br />

                <button type="submit">Login</button>
            </form>

            <h3>{msg}</h3>
        </>
    );
};

export default App;