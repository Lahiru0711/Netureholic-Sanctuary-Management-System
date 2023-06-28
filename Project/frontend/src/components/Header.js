import React from "react";
import {Link} from 'react-router-dom';

function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to ="/sale" className="nav-link">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/sale/add" style={{color:"black"}}>Ticket Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"black"}}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"black"}}>Learning Center</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:"black"}}>Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;