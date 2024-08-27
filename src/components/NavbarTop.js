import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function NavbarTop() {
    return (
         <>
            <Router>
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <nav className="nav justify-content-end">
                                <Link to="/" className="nav_link" id="hyperLogin">Login</Link>
                                    <div className="divider">|</div>
                                <Link to="/" className="nav_link" id="hyperaRegister" target="_blank">Register</Link>
                            </nav>
                        </div>
                    </div>
                </div> 
            </Router>
         </>
    );
}