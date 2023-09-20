import {  NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="">
            <h2>Header page</h2>
            <nav>
            {/* <a href="home">Home</a>
            <a href="about">About</a>
            <a href="contact">Contact</a> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;