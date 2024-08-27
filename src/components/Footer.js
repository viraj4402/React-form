import logo from '../logo.svg';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function Footer() {
    return (
         <>
            <Router>
                <div className="site-footer">
                    <footer>
                        <div className='container'>
                            <div className='row'> 
                                <div className='col-md-4'> 
                                    <Link className="footer-brand" to="/"><img src={logo} alt="Logo" /></Link>
                                </div>
                                <div className='col-md-4'> 
                                    <ul className="nav_links_footer">
                                        <li className="footer_links"> <Link className="nav-item nav-link active" to="/" data-name="home">Home</Link></li>
                                        <li className="footer_links"> <Link className="nav-item nav-link" to="/" data-name="about">About</Link></li>
                                        <li className="footer_links"> <Link className="nav-item nav-link" to="/" data-name="bitcoin">Bitcoin/ETH Mining</Link></li>
                                        <li className="footer_links"> <Link className="nav-item nav-link" to="/" data-name="news">News</Link></li>
                                        <li className="footer_links"> <Link className="nav-item nav-link" to="/" data-name="contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </Router>
         </>
    );
}