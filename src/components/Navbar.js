import logo from '../logo.svg';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 

export default function Navbar() {
    return (
         <>
            <Router>
                <div className="site-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <div className="container">
                            <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <Link className="nav-item nav-link active" to="/" data-name="home">Home</Link>
                                    <Link className="nav-item nav-link" to="/" data-name="about">About</Link>
                                    <Link className="nav-item nav-link" to="/" data-name="bitcoin">Bitcoin/ETH Mining</Link>
                                    <Link className="nav-item nav-link" to="/" data-name="news">News</Link>
                                    <Link className="nav-item nav-link" to="/" data-name="contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </Router>
         </>
    );
}