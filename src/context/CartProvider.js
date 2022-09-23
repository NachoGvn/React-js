import { useState } from 'react'
import Item from '../components/Item/Item'
import {CartContext} from './CartContext'


export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

 
  const addToCart = (Item, cantidad) => {
    if(isInCart(Item.id)){
      alert ("ya esta en el carrito")
    }
    else{ 
      setCart([...cart,{Item, cantidad}])
      console.log('cart', [...cart, {...Item,cantidad}])
    }
  }

  const clear = () => {
    setCart([])
  }
  
  const isInCart = ({id}) => {
    return cart.some((Item) => Item.id === id)
  }
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider