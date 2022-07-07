import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";



const Cart = () => {


    const { clearCart, cart, totalToPay, totalQuantity } = useContext(CartContext)


    if (!totalQuantity) {
        return (
            <>
                <h1 className="productDetail">Your cart is empty</h1>
                <h2 className="productDetail">Go check our products...</h2>

                <Link to={`/`} className="Option">
                    <button className="cartButtons">Go to Home</button>
                </Link>
            </>
        )
    }


    return (
        <>
            <h1 className="itemDetailTitle">CART</h1>
            {cart.map(product => <ItemCart key={product.id} {...product} />)}
            <h2 className="itemDetailTitle">Total ${totalToPay}</h2>

            <button onClick={clearCart} className="cartButtons">Clear cart</button>
            <Link to={`/checkout`} className="Option">
                <button className="cartButtons">Check out</button>
            </Link>

        </>
    )




}

export default Cart