import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { ddbb } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

        const docRef = doc(ddbb, 'allProducts', productId)

        getDoc(docRef).then(doc => {
            console.log(doc)
            const allProductsFormatted = { id: doc.id, ...doc.data() }
            setProduct(allProductsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

    if (loading) {
        return <h2 className="loader">Loading...</h2>
    }

    return (
        <>
            <h3 className="productDetail">Product detail</h3>
            < ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer