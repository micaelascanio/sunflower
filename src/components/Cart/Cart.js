import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";
import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore';
import { ddbb } from '../../services/firebase/index';
import { useNotification } from "../../notifications/Notifications"


const Cart = () => {

    const [loading, setLoading] = useState(false)
    const { clearCart, cart, totalToPay, totalQuantity } = useContext(CartContext)

    const setNotification = useNotification()

    {/*

    const handleCreateOrder = () => {

        setLoading(true)

        const objectToOrder = {
            buyer: {
                name: "Micaela",
                phone: "11111alo1111",
                email: "micaelascanio1@gmail.com"
            },
            items: cart,
            total: totalToPay,
        }


        const batch = writeBatch(ddbb)

        const ids = cart.map(product => product.id)

        const stockUnavailable = []

        const collectionRef = collection(ddbb, "allProducts")

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const product = cart.find(product => product.id === doc.id)
                    const productQuantity = product.quantity

                    if (dataDoc.stock >= productQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - productQuantity })
                    } else {
                        stockUnavailable.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (stockUnavailable.length === 0) {
                    const collectionRef = collection(ddbb, 'orders')
                    return addDoc(collectionRef, objectToOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', allProducts: stockUnavailable })
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setNotification('success', `Order generated successfully. Your order id is:${id}`)
            }).catch(error => {
                if (error.type === 'out_of_stock') {
                    setNotification('error', 'Some of the products you chose hasnt stock available')
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })


    }

    if (loading) {
        return <h1 className="loader">Generating order...</h1>
    }

*/}

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

            {/* <button className="cartButtons" onClick={handleCreateOrder}  >Check out</button>*/}
        </>
    )




}

export default Cart