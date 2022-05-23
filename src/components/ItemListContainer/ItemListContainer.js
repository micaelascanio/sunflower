
const ItemListContainer = (props) => {
    return(
        <div className="item-list-container">
            <h1>{props.title}</h1>
            <h3 className="greeting">{props.greeting}</h3>
        </div>
    )   
}


export default ItemListContainer