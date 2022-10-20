
import { Link } from "react-router-dom"
import Item from "../Item/Item"



const ItemList = ({productList}) => {
  return (
    <div>
      {
      productList.map((product) =>  (
        <Link key={product.id} to={'/detail/'+ product.id} style={{textDecoration: 'none'}}>
        
        <Item
        title={product.title} 
        price={product.price} 
        image={product.image} />
        </Link>
      )) 
    }
      </div>
  )
}

export default ItemList