import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import SunflowerIcon from '../SunflowerIcon/SunflowerIcon';
import { Link , NavLink } from 'react-router-dom';
{/* import { useState } from 'react'; */}

const NavBar = () => { 
   {/* const [input, setInput] = useState ("")
    const handleSubmit = (e) => {
        e.preventDefault()
        
    } */}

    return(
    <nav>
        <div className="navigation-menu">
            <ul>
                <li>
                    <SunflowerIcon />
                </li>
                <NavLink to="/category/Plants" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Plants</NavLink>
                <NavLink to="/category/Pots" className = {({isActive}) => isActive ? 'navActiveItem' : 'navItem'}>Pots</NavLink>
              {/*  <li className='navItem'>Contact</li> */}
              {/* <form onSubmit={handleSubmit}>
                    <input className='inputSearch' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button className='buttonSearch' type="submit" >Search</button>
                </form> */}
                <li className="Icon">
                    <CartWidget />
                </li>
            </ul>
        </div>
    </nav>
    )

}


export default NavBar 