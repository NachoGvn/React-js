import data from '../MockData'
import { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer  = ({greeting}) => {

    const [detailProducts, setDetailProducts] = useState([])

    useEffect(()  => {getProducts.then((response) => {
        setDetailProducts(response)
    })
    .catch((error) => console.error(error));
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
           
            setTimeout(() =>{
                resolve(data);
            },2000);
        })
    
    return ( 
        <ItemDetail lista ={detailProducts} />
            );
        }

        export default ItemDetailContainer