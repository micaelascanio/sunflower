import Item from "../Item/Item"

const ItemList = ({allPlants}) => {
    return(
        
             <ul>{
                allPlants.map(plants => <Item key={plants.id} {...plants}/>)}
            </ul>

    
    )
}



export default ItemList