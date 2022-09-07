import {useState} from 'react'
import {useEffect} from 'react'

const OnAdd = () => {
    const [contador,setContador] = useState(1)
    const [stock,setStock] = useState(4)
    const [precio,setPrecio] = useState(100)
    const precioF = 100

    
    const aumentar = () => {
        setContador(contador + 1)
        setStock(stock - 1)
        preciosSuma()
        if ( contador == 5 && stock === 0){
            alert("No hay mas stock")
            setContador(contador = 5)
            
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
    const preciosSuma = () => {
        setPrecio(precioF * contador + precioF)
        precio = precioF
    }
    const preciosResta = () => {
        setPrecio(precioF * contador - precioF)
        precio = precioF
    }

    useEffect(() => {
        if (contador && (+contador > 5)) setContador(5)
      }, [contador])

      useEffect(() => {
        if (contador && (+contador < 1)) setContador(1)
      }, [contador])

  return (
    <div>
         <h2> PRODUCTO</h2>
        <h3> Cantidad : {contador}</h3>
          <button onClick={aumentar}>
              +
          </button>
          <button onClick={restar}>
              -
          </button>

          <h3>Precio : {precio}  </h3>
    </div>
  )
}

export default OnAdd