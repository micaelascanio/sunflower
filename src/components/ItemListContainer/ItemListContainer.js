import { getPlants } from "../asyncmock"
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"

/* promesa que trae las plantas como productos */ 


const ItemListContainer = (props) => {

    const [allPlants, setPlants] = useState([])

    useEffect(() => {
        getPlants().then(response => {
            setPlants(response)
        })
    }, [])



    return (
        <div className="item-list-container">
            
            <h1>{props.title}</h1>
            <h3 className="greeting">{props.greeting}</h3>
            < ItemList allPlants={allPlants}/>
           
        </div>
        
    )
}

export default ItemListContainer