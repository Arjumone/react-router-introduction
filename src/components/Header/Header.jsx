import {  NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <h2>Header page</h2>
            <nav className="">
            {/* <a href="home">Home</a>
            <a href="about">About</a>
            <a href="contact">Contact</a> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;