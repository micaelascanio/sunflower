
const ItemDetail = ({img, name,category, price, description}) => {
    return(
        <div className="itemDetailCard">
        <h3 className="itemDetailTitle">{name}</h3>
        <img src={img} className="imgDetail"/>
        <p className="itemCategory">Category: {category}</p>
        <p className="itemPrice">{price}</p>
        <p className="itemDescription">{description}</p>
        </div>
        
    )

}


export default ItemDetail