import { React, useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form>
            <label>First Name</label>
            <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" required></input>
            <label>Last Name</label>
            <input type="text" name="lastname" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" required></input>
            <label>Gender</label>
            <input type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} required>Male</input>
            <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} required>Male</input>
            <input type="radio" name="gender" id="other" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} required>Male</input>
            <label>Email</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required></input>
            <label>Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required></input>
        </form>
    )
}