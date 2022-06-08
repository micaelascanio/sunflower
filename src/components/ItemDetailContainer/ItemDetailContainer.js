import { useEffect , useState } from "react"
import { getProductsById } from "../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()  => {
    const [product, setProduct] = useState()

    const [loading, setLoading] = useState (true)

    const {productId} = useParams ()

    useEffect(() =>{
        getProductsById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading (false)
        })
    }, [])

    if (loading) {
        return <h2 className="loader">Loading...</h2>
    }
   
    return (
    <>
        <h3 className="productDetail"> Product detail</h3>
        < ItemDetail {...product} />
    </>
    )
}

export default ItemDetailContainer