import { useState, createContext, useEffect } from 'react';




const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)
    



    useEffect(() => {


        let totalQuantity = 0

        cart.forEach(product => {
            totalQuantity += product.quantity
        })

        setTotalQuantity(totalQuantity)

    }, [cart])




    const addProducts = (prodToAdd) => {
        if (!isAtCart(prodToAdd.id)) {
            setCart([...cart, prodToAdd])
        }
    }




    useEffect(() => {


        let totalToPay = 0

        cart.forEach(product => {
            totalToPay += product.quantity * product.price
        })

        setTotalToPay(totalToPay)

    }, [cart])



    const clearCart = () => {
        setCart([])
    }


    const removeProduct = (id) => {
        const emptyCart = cart.filter(product => product.id !== id)
        setCart(emptyCart)
    }


    const isAtCart = (id) => {
        return cart.some(product => product.id === id)
    }



    return (

        <CartContext.Provider value={{ cart, addProducts, removeProduct, isAtCart, totalQuantity, clearCart, totalToPay }}>
            {children}
        </CartContext.Provider>

    )
}


export default CartContext