import Item from "../Item/Item"
import OnAdd from "../itemCount/itemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



const ItemDetail= ({detailProducts}) => {
const [cantidad,setcantidad] = useState(1)
const {addToCart} = useContext(CartContext)

  
const add = () => {
  setcantidad(cantidad)
  addToCart(detailProducts,cantidad)
}

  return (
    <div>
        
         <div key={detailProducts.id}>
         <h2 className='name'>{detailProducts.title} </h2>
         <img className='image' src={detailProducts.image} alt={detailProducts.title} />
         <h3 className='descripcion'>{detailProducts.description} </h3>
         <h3 className='precio'>${detailProducts.price} </h3>
     </div>
      
      <OnAdd detailProducts ={detailProducts} cantidad = {cantidad} setcantidad = {setcantidad} />
      <button  onClick={() => add()} >Comprar</button>
      <Link to={'/cart'}  className = "finalizar">finalizar compra</Link>
     </div>
    
  )
}

export default ItemDetail