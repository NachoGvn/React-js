import Item from "../Item/Item"
import OnAdd from "../itemCount/itemCount"
import { useState } from "react"
import { Link } from "react-router-dom"



const ItemDetail= ({lista}) => {
  let [contador,setContador] = useState(1)

  const handleClick = () => {
      console.log(contador)
  }
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
    <OnAdd setContador = {setContador} contador = {contador} />
     <Link to={"/card"} onClick={handleClick} className = "finalizar">Finalizar compra</Link>
      </div>
  )
}

export default ItemDetail