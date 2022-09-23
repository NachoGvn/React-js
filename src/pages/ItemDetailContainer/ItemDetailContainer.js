
import { useEffect, useState } from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import data from '../../components/MockData'

const ItemDetailContainer  = ({greeting}) => {
    const {id} = useParams()
    console.log({id})

    const [detailProducts, setDetailProducts] = useState()
    

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
        detailProducts && <ItemDetail lista ={detailProducts} />
            );
        }

        export default ItemDetailContainer