import Item from "../Item/Item"

const ItemDetail= ({lista}) => {
  return (
    <div>
      {
      lista.map((product) =>  (
        <Item
        key={product.id}
        nombre={product.nombre} 
        descripcion={product.descripcion} 
        precio={product.precio} 
        url={product.url} />
      )) 
    }
      </div>
  )
}

export default ItemDetail