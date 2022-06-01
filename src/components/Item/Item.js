import './Item.css';


const Item = ({img , name , price}) =>{
    return (
        <div className="cards">
            <img src ={img} alt= {name} width = '200px' height = '200px' />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}


export default Item