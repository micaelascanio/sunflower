import { getProducts, getProductsByCategory } from "../asyncmock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css';

 

/* promesa que trae los productos */ 


const ItemListContainer = (props) => {

    const [allProducts, setProducts] = useState([])

    const [loading, setLoading] = useState (true)

    const {categoryId} = useParams ()


    useEffect(() => {

        setLoading(true)

        if(!categoryId) {
        getProducts().then(response => {
            setProducts(response)
        }).finally(() => {
            setLoading (false)
        })
        } else{
            getProductsByCategory(categoryId).then(response =>{
                setProducts(response)  
            }).finally(() => {
                setLoading (false)
            })
        }

    }, [categoryId])

    if (loading) {
        return <h2 className="loader">Loading...</h2>
    }

    return (
        <div className="App-header">
            
            <h1>{props.title}</h1>
            <h3 className="greeting">{props.greeting}</h3>
            < ItemList allProducts={allProducts}/>            
        </div>
        
    )
}

export default ItemListContainer