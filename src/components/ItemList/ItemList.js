
import Item from "../Item/Item"

const ItemList = ({lista}) => {
  return (
    <div>
      {
      lista.map((product) =>  (
        <Item
        key={product.id}
         nombre={product.nombre} 
        precio={product.precio} 
        url={product.url} />
      )) 
    }
      </div>
  )
}

export default ItemList