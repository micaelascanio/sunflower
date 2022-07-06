import CartContext from "../../context/CartContext";
import { useContext } from "react";

    
  const ItemCart = ({ id, name, quantity, price }) => {
    
    const {removeProduct} = useContext(CartContext)

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeProduct(id)
    }

    return (
        <ul>
        <li>Quantity: {quantity}</li>
        <li>${price}</li>
        <li>{name}</li>
        <li>Subtotal: ${price * quantity}</li>
        <button  onClick={handleRemoveItem} className = "cartButtons">Remove</button>      
        </ul>                 
                           
                          
    );
}

export default ItemCart