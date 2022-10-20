
import { useEffect, useState } from 'react'
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import data from '../../components/MockData'
import {doc, getFirestore,getDoc} from 'firebase/firestore'

const ItemDetailContainer  = ({greeting}) => {
    let {id} = useParams()
    const [detailProducts, setDetailProducts] = useState()
    const db = getFirestore()
    
    const getProduct = () => {
        const queryDoc = doc(db, 'items', id)

        getDoc(queryDoc).then((res) => {
            setDetailProducts({id: res.id, ...res.data()})
            
        })
        .catch(err => console.log(err))
    }
    useEffect(()  => {
        getProduct()
    })
    
        
    
    return ( 
        detailProducts && <ItemDetail detailProducts ={detailProducts} />
            );
        }

        export default ItemDetailContainer