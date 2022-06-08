import { BsFlower1 } from "react-icons/bs";
import {Link} from 'react-router-dom'

const SunflowerIcon = () => {
   return (
    <Link to= "/" className="Icon">
      <i>
        <BsFlower1 size={40} /> Sunflower.
      </i>
    </Link>
    )
}

export default SunflowerIcon