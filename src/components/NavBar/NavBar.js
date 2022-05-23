import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => { 
    return(
    <nav>
        <div className="navigation-menu">
            <ul>
                <li className="Icon">
                    <CartWidget />
                </li>
                <li><a href="">Home</a></li>
                <li><a href="">Plants</a></li>
                <li><a href="">Pots</a></li>
                <li><a href="">Contact</a></li>   
            </ul>           
        </div>
        </nav>    
    )
}


export default NavBar