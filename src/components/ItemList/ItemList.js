import Item from "../Item/Item"

const ItemList = ({allProducts}) => {
    return(
        
             <p>{
                allProducts.map(products => <Item key={products.id} {...products}/>
                )}
            </p>

    
    )
}



export default ItemList