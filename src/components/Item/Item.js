import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({img , name , price, id}) =>{
    return (
        <div className="cards">
            <img src ={img} alt= {name} width = '200px' height = '200px' />
            <p>{name}</p>
            <p>Price: {price}</p>
            <Link to={`/detail/${id}`} className="Option">
            <button className="allButtons">See more</button>
            </Link>
        </div>
    )
}


export default Item