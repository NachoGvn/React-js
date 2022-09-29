import {useState} from 'react'
import {useEffect} from 'react'
import data from '../MockData'
import { useParams } from 'react-router-dom'

const OnAdd = ({contador, setContador}) => {
    const [stock,setStock] = useState(4)
    let [precios,setPrecio] = useState(3500)
    let precioF = 3500

    
    const aumentar = () => {
        setContador(contador + 1)
        setStock(stock - 1)
        preciosSuma()
        if ( contador == 5 && stock === 0){
            alert("No hay mas stock")
            
            
        }
        console.log(setContador)
    }
    const restar = () => {
        setContador(contador - 1)
        setStock(stock + 1)
        preciosResta()
        if (contador === 0){
            alert("stock no disponible")
        }
        console.log(setContador)
    }
    let preciosSuma = () => {
        setPrecio(precioF * contador + precioF)
        precios = precioF
    }
    let preciosResta = () => {
        setPrecio(precioF * contador - precioF)
        precios = precioF
    }

    useEffect(() => {
        if (contador && (+contador > 5)) setContador(5)
      }, [contador])

      useEffect(() => {
        if (contador && (+contador < 1)) setContador(1)
      }, [contador])

      useEffect(() => {
        if (precios && (+precios > 17500)) setPrecio(17500)
      }, [precios])

      useEffect(() => {
        if (precios && (+precios < 3500)) setPrecio(3500)
      }, [precios])

  return (
    <div>
         
        <h3> Cantidad : {contador}</h3>
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