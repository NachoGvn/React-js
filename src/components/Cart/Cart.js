import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Item from "../Item/Item"
import { collection, addDoc, getFirestore,updateDoc,doc} from "firebase/firestore"
import { Moment } from "moment/moment"
import moment from "moment/moment"

const Cart = () => {
    const {cart, addToCart,removeItem} = useContext(CartContext)
    console.log('cart', cart)
    const db = getFirestore()

    const createOrder = () => {
      const order = {
        buyer : {
          name: 'Ignacio',
          phone: '3471566886',
          email: 'hola@hotmail.com'
        },
        items: cart,
        total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity) , 0),
        date: moment().format()
      }
      const query = collection(db,'orders')
      addDoc(query, order)
      .then((response) => {alert('Gracias por su compra')
      console.log(response)})
      .catch(() => alert('Tu compra no pudo ser completada'))
    }

    const updateOrder = () => {
      const idOrder = 'COVONGrzDtI5b39fqkUs'
      const order = {
        buyer : {
          name: 'Ignacio',
          phone: '3471566886',
          email: 'hola@hotmail.com'
        },
        items: cart.pop(),
        total: cart.pop().reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity) , 0),
        date: moment().format()
      }
      const queryUpdate = doc(db, 'orders', idOrder)
      updateDoc(queryUpdate, order)
      .then ((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }

      
    

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
        <button onClick={createOrder}> Crear la orden</button>
        
        </div>
      ))}
            </>
        )}
        
    </div>
  )
}

export default Cart