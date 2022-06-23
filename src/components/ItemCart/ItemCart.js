  import { useCart } from 'context/CartContext';
    
  const ItemCart = ({ id, name, quantity, price }) => {
    
    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        e.stopPropagation()
        removeItem(id)
    }

    return (
        <ul>
        <li>Quantity: {quantity}</li>
        <li>${price}</li>
        <li>{name}</li>
        <li>Subtotal: ${price * quantity}</li>
        <button  onClick={handleRemoveItem}>Remove</button>      
        </ul>                 
                           
                          
    );
}

export default ItemCart