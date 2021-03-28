import React, {Component} from 'react'
import {Link }  from 'react-router-dom'
import './Header.css'
import Navigation from "../Navigation/Navigation"

class Header extends Component{
    render() {
        return <header className="header">
                    
                    <div className="top-bar">
                        <div className="container">
                            <div className="user_box ml-auto">
                                <div className="user_box_link"><Link to="/login">LOGIN</Link></div>
                                <div className="user_box_link"><Link to="/register">REGISTER</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        
                        <Link to="/">
                            {/* <img src='../../logo-travel.png' alt="logo" className="logo-image" /> */}
                            <img src='../../travel-logo.png' alt="logo" className="logo-image" />
                            <h1>TRAVELPOINT</h1>
                        </Link>
                        
                        <Navigation />
                    </div>
                </header>
      }
}
export default Header;