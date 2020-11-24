import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AuthNav from "./auth-nav";
import SwitchBoard from "../config/routes";
import { AlertTriangle, Home, Rss, Heart, User, MoreVertical, ArrowRight, Star } from 'react-feather';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/events">Events</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/posts">Feed</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/events">Wellness</Link>
                </li>
                </ul>
            </div>
            <Link className="navbar-brand ml-2" to="/">SOS</Link>
            <AuthNav />
        </nav>
        <SwitchBoard />
        </>
    );
}

export default Navbar;
