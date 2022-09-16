
import { Link } from "react-router-dom"
import Item from "../Item/Item"

const ItemList = ({lista}) => {
  return (
    <div>
      {
      lista.map((product) =>  (
        <Link key={product.id} to={'/detail/'+ product.id} style={{textDecoration: 'none'}}>
        
        <Item
        nombre={product.nombre} 
        precio={product.precio} 
        url={product.url} />
        </Link>
      )) 
    }
      </div>
  )
}

export default ItemList