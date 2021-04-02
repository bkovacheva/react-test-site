import { NavLink } from 'react-router-dom';
import "./Navigation.css"


const Navigation = () => {
    return (
        <nav className="main-menu">
            < ul className="main-menu-container">
                <li><NavLink to="/asia" className="main-menu-item">Asia</NavLink></li>
                <li><NavLink to="/africa" className="main-menu-item"> Africa</NavLink></li>
                <li><NavLink to="/australia" className="main-menu-item">Austraia</NavLink></li>
                <li><NavLink to="/europe" className="main-menu-item">Europe</NavLink></li>
                <li><NavLink to="/north_america" className="main-menu-item"> North America</NavLink></li>
                <li><NavLink to="/south_america" className="main-menu-item">South America</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;