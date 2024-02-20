import "./LoginForm.css";
import {useState} from "react";

function LogInForm() {
    const [ credentials, setCredentials ] = useState({username: "", password: ""});
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    return (
        <form className="myForm">
            <div className="myInput">
                <label htmlFor="username">Username: </label>
                {/* <input type="text" id="username" placeholder="Your username" /> */}
                <input type="text" id="username" onChange={handleChange} placeholder="Your username" />
            </div>
            <div className="myInput">
                <label htmlFor="password">Password: </label>
                {/* <input type="password" id="password" placeholder="Your password" /> */}
                <input type="password" id="password" onChange={handleChange} placeholder="Your password" />
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}
export default LogInForm;