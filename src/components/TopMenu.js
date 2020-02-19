import * as React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";


const TopMenu = () => 
    <NavBar bg="dark" variant="dark">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
            <Link to="/" className="nav-link" activeClassName="active" >About Me</Link>
            <Link to="/techskills" className="nav-link" activeClassName="active" >Technical Skills</Link>
            <Link to="/publications" className="nav-link" activeClassName="active" >Publications</Link>
            <Link to="/portfolio" className="nav-link" activeClassName="active" >Portfolio</Link>
        </Nav>
    </NavBar>

export default TopMenu;