import {useState} from 'react'
import {useEffect} from 'react'

const OnAdd = () => {
    let [contador,setContador] = useState(1)
    let [stock,setStock] = useState(4)
    let [precio,setPrecio] = useState(100)
    let precioF = 100

    
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
        precio = precioF
    }
    let preciosResta = () => {
        setPrecio(precioF * contador - precioF)
        precio = precioF
    }

    useEffect(() => {
        if (contador && (+contador > 5)) setContador(5)
      }, [contador])

      useEffect(() => {
        if (contador && (+contador < 1)) setContador(1)
      }, [contador])

      useEffect(() => {
        if (precio && (+precio > 500)) setPrecio(500)
      }, [precio])

      useEffect(() => {
        if (precio && (+precio < 100)) setPrecio(100)
      }, [precio])

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