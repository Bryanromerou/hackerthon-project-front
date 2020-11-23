import React from 'react';
import { Link } from 'react-router-dom';
import AuthNav from "./auth-nav";
import Profile from './Profile';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Hackathon App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#" >Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Event</a>
            </li>
            <li class="nav-item">
                <a className="nav-link" href="#">Forum</a>
            </li>
            <li class="nav-item">
                <AuthNav />
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;
