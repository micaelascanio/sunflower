import { useState } from 'react' 
import ItemCart from "components/ItemCart/ItemCart"
import { useCart } from "context/CartContext"
import { useOrders } from "services/firebase/firestore/orders"
import { Link } from "react-router-dom"


const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

  
    const { cart, totalProductsAdded, totalToPay, clearCart } = useCart()

    const { createOrder } = useOrders()

    const handleCreateOrder = () => {
        setLoading(true)

        createOrder().then(response => {
            console.log(response)
            if(response.result === 'orderCreated') {
                clearCart()
                setOrderId(response.id)
            }
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }

    if(loading) {
       
            return <h2 className="loader">Loading...</h2>
      
    }

    if(orderId !== '') {
        return (
            <div>Your Order-Id is: {orderId}. Contact us for shipping</div>
                 
        )
    }

    if(!totalProductsAdded) {
        return (
            <>
            <h1>Your cart is empty</h1>
            <h3>Go check our products...</h3>
            <Link to= "/">
            <button>Products</button>
            </Link>
            </>
        )
    } 

    return (
        <>
            <h2>Your cart</h2>
            
                {cart.map(product => <ItemCart key={product.id} {...product}/>)}
          
                    Total: ${totalToPay}
               
                <button onClick={handleCreateOrder}>Create Order</button>
                </>
    )
}

export default Cart