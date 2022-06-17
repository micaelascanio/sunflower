import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartWidget = () => {

  const { getCartQuantity, totalQuantity } = useContext(CartContext)


  return (
    <div>
      <i>
        <BsFillCartFill size={30} />
        {totalQuantity}
      </i>
    </div>
  )
}

export default CartWidget