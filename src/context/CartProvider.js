import { useState } from 'react'
import Item from '../components/Item/Item'
import {CartContext} from './CartContext'


export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

 
  const addToCart = (detailProducts, cantidad) => {
    console.log(detailProducts,cantidad)
    if(isInCart(detailProducts.id)){
      alert ("ya esta en el carrito")
    }
    else{ 
      setCart([...cart,{detailProducts, cantidad}])
      console.log('cart', [...cart, {...detailProducts,cantidad}])
    }
  }

  const clear = () => {
    setCart([])
  }
  
  const isInCart = ({id}) => {
    return cart.some((item) => item.id === id)
  }

    const removeItem =(productId) => {
      let nuevoArreglo = []
      cart.forEach((product) => {
        if(product.id === productId) {
          console.log(product)
        } else {
          nuevoArreglo.push(product)
        }
      });
      setCart(nuevoArreglo)
      
    }
  
  return (
    <CartContext.Provider value={{cart, addToCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
