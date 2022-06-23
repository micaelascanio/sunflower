import Item from "../Item/Item"

const ItemList = ({allProducts}) => {
    return(
        
             <div>{
                allProducts.map(products => <Item key={products.id} {...products}/>
                )}
            </div>

    
    )
}



export default ItemList