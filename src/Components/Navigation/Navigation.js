import React, {Component} from 'react'
import { BrowserRouter,NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className="navbar">
            <span>Where do you want to travel ?</span>
            <ul>
                <li><NavLink to="/bulgaria">Bulgaria</NavLink></li>
                <li><NavLink to="/europe">Europe</NavLink></li>
                <li><NavLink to="/everywhere">Everywhere</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;