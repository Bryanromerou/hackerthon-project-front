import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AuthNav from "./auth-nav";
import SwitchBoard from "../config/routes";
import { AlertTriangle, Home, Rss, Heart, User, MoreVertical, ArrowRight, Star } from 'react-feather';

const Navbar = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/home">SOS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/forum">Forum</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/events">Events</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/natural-disasters">Natural Disasters</Link>
                </li>
                <li className="nav-item">
                    <AuthNav />
                </li>
                </ul>
            </div>
        </nav>
        <SwitchBoard />
        </>
    );
}

export default Navbar;
