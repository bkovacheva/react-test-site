import { NavLink } from 'react-router-dom';
import "./Navigation.css"


const Navigation = () => {
    return (
        <nav className="main-menu">
            < ul className="main-menu-container">
                <li><NavLink to="/bulgaria" className="main-menu-item">Bulgaria</NavLink></li>
                <li><NavLink to="/europe" className="main-menu-item"> Europe</NavLink></li>
                <li><NavLink to="/everywhere" className="main-menu-item">Everywhere</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;