import {useState} from 'react'
import {useEffect} from 'react'
import data from '../MockData'
import { useParams } from 'react-router-dom'

const OnAdd = ({cantidad, setcantidad, detailProducts}) => {
    const [stock,setStock] = useState(detailProducts.stock)
    let [precios,setPrecio] = useState(detailProducts.price)
    let precioF = detailProducts.price

    
    const aumentar = () => {
        setcantidad(cantidad + 1)
        setStock(stock - 1)
        preciosSuma()
        if ( cantidad == detailProducts.stock && stock === 0){
            alert("No hay mas stock")
            
            
        }
    }
    const restar = () => {
        setcantidad(cantidad - 1)
        setStock(stock + 1)
        preciosResta()
        if (cantidad === 0){
            alert("stock no disponible")
        }
        
    }
    let preciosSuma = () => {
        setPrecio(precioF * cantidad + precioF)
        precios = precioF
    }
    let preciosResta = () => {
        setPrecio(precioF * cantidad - precioF)
        precios = precioF
    }

    useEffect(() => {
        if (cantidad && (+cantidad > detailProducts.stock)) setcantidad(detailProducts.stock)
      }, [stock])

      useEffect(() => {
        if (cantidad && (+cantidad < 1)) setcantidad(1)
      }, [stock])

      useEffect(() => {
        if (precios && (+precios > detailProducts.price * detailProducts.stock)) setPrecio(detailProducts.price*5)
      }, [precios])

      useEffect(() => {
        if (precios && (+precios < detailProducts.price)) setPrecio(detailProducts.price)
      }, [precios])

  return (
    <div>
         
        <h3> Cantidad : {cantidad}</h3>
          <button onClick={aumentar}>
              +
          </button>
          <button onClick={restar}>
              -
          </button>

          <h3>Precio : {precios}  </h3>
    </div>
  )
}

export default OnAdd