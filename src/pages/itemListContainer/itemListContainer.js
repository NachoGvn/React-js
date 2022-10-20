import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { Link } from 'react-router-dom'
import { getFirestore,getDocs,collection, doc,} from 'firebase/firestore'

const ItemListContainer  = ({greeting}) => {
    const [productList, setProductList] = useState([])

    const firebase = async () => {
    const db = getFirestore()
    const querySnapShot = collection(db, 'items')
    getDocs(querySnapShot).then((response) => {
        const data = response.docs.map((product)  => {
            return {id: product.id, ...product.data()}
        })
        setProductList(data)
    })
    .catch((error) => console.error(error));
}


    useEffect(()  => {
        firebase()
    })

    
    return ( 
        <div>
        <ItemList  productList ={productList} />
        
        </div>
            );
        }

        export default ItemListContainer