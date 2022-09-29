
import { useEffect, useState } from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import data from '../../components/MockData'
import {doc, getFirestore,getDoc} from 'firebase/firestore'

const ItemDetailContainer  = ({greeting}) => {
    let {id} = useParams()
    console.log(id)

    const [detailProducts, setDetailProducts] = useState()
    const db = getFirestore()
    const queryDoc = doc(db, 'items', 'qBgtVuSRrsrldZd1660R')
    getDoc(queryDoc).then(res => {console.log(res)
    })
    .catch(err => console.log(err))
    

    useEffect(()  => {getProducts.then((response) => {
        setDetailProducts(data.filter(product => product.id === 1))
    })
    .catch((error) => console.error(error));
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
        
            setTimeout(() =>{
                resolve (data)              
               console.log(detailProducts)
            },2000);
           
        })
        
    
    return ( 
        detailProducts && <ItemDetail lista ={detailProducts} />
            );
        }

        export default ItemDetailContainer