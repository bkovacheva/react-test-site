import React, {Component} from 'react'
import {Link }  from 'react-router-dom'
import './Header.css'
import Navigation from "../Navigation/Navigation"
import { useEffect } from 'react';
import { auth } from "../../services/firebase-service";
// import {MyContext} from '../Login/Login';

const Header = ({
    isAuthenticated,
    email,
}) => {
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
    }, [isAuthenticated])

        return (
        <header className="header">
                    <div className="top-bar">
                        <div className="container">
                            <div className="user_box ml-auto">
                                {isAuthenticated
                                    ? <div className="user_box_link"><Link to="/logout">LOGOUT</Link></div>
                                    : <div className="user_box_link"><Link to="/login">LOGIN</Link></div>
                                }
                                {isAuthenticated
                                    ? <div className="user_box_link"><Link to="/profile">{email}</Link></div>
                                    : <div className="user_box_link"><Link to="/register">REGISTER</Link></div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        
                        <Link to="/">
                            <img src='../../travel-logo.png' alt="logo" className="logo-image" />
                            <h1>TRAVELPOINT</h1>
                        </Link>
                        
                        <Navigation />
                    </div>
                </header>
    );
};

export default Header;