import Item from "../Item/Item"
import OnAdd from "../itemCount/itemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"




const ItemDetail= ({lista}) => {
const [contador,setContador] = useState(1)
const {addToCart} = useContext(CartContext)
  
function add (lista, contador) {
  addToCart (lista, contador)
}

  return (
    <div>
        
      {lista.map((product) =>  (
        <Item
        key={product.id}
        nombre={product.nombre} 
        descripcion={product.descripcion} 
        precio={product.precio} 
        url={product.url} />
      ))}
      <OnAdd contador = {contador} setContador = {setContador} />
      <Link to={'/cart'} onClick={() => add(lista)} className = "finalizar">Finalizar compra</Link>
     </div>
    
  )
}

export default ItemDetail