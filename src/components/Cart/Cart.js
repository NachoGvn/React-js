import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"

const Cart = () => {
    const {cart, addToCart,removeItem} = useContext(CartContext)
    console.log('cart', cart)
  return (
    <div>
        {cart.length === 0 ? (
            <>
            <h2> No hay productos</h2>
            <Link to={'/'}>Volver a comprar</Link>
            </>
        ): (
            <>
        {cart.map((item) =>  (
        <div key={item.id}>
        <h3>{item.title} </h3>
        <p>{item.price} </p>
        <button onClick={()=> removeItem(item.id) }> Eliminar producto</button>
        </div>
      ))}
            </>
        )}
        
    </div>
  )
}

export default Cart