import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import SunflowerIcon from '../SunflowerIcon/SunflowerIcon';
import {NavLink } from 'react-router-dom';

const NavBar = () => { 

    return(
    <nav>
        <div className="navigation-menu">
            <ul>
                <li>
                    <SunflowerIcon />
                </li>
                <NavLink to="/category/Plants" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Plants</NavLink>
                <NavLink to="/category/Pots" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Pots</NavLink>
                <li className="Icon">
                    <CartWidget />
                </li>
            </ul>
        </div>
    </nav>
    )

}


export default NavBar 