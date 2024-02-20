import "./LoginForm.css";

function LogInForm() {
    return (
        <form className="myForm">
            <div className="myInput">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" placeholder="Your username" />
            </div>
            <div className="myInput">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="Your password" />
            </div>
            <button type="submit">Log In</button>
        </form>
    )
}
export default LogInForm;