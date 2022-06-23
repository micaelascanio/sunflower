import { getProducts, getProductsByCategory } from "../asyncmock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { ddbb } from "../../services/firebase";



/* promesa que trae los productos */


const ItemListContainer = (props) => {

    const [allProducts, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()



    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId ? (
            query(collection(ddbb, 'allProducts'), where('category', '==', 'categoryId'))
        ) : (collection(ddbb, 'allProducts'))

        getDocs(collectionRef).then(response => {
            console.log(response)
            const allProductsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })

            setProducts(allProductsFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

        
    }, [categoryId])


    console.log(categoryId)

    if (loading) {
        return <h2 className="loader">Loading...</h2>
    }

    return (
        <div className="App-header">

            <h1>{props.title}</h1>
            <h3 className="greeting">{props.greeting}</h3>
            < ItemList allProducts={allProducts} />
        </div>

    )
}

export default ItemListContainer