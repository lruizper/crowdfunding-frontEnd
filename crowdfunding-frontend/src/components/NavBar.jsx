import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <div className="my-navBar">
            <nav>
                <ul>
                <li><Link className="navButton" to="/">Home</Link></li>
                <li><Link className="navButton" to="/about">About</Link></li>
                <li><Link className="navButton" to="/contact">Contact</Link></li>
                <li><Link className="navButton" to= "/login"> Login</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>);
}
export default NavBar;