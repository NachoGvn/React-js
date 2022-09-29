import data from '../../components/MockData'
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
        const data = response.docs.map((doc)  => {
            return {id: doc.id, ...doc.data()}
        })
        setProductList(data)
    })
}


    useEffect(()  => {getProducts.then((response) => {
        setProductList(response)
    })
    .catch((error) => console.error(error));
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
           
            setTimeout(() =>{
                resolve(firebase);
            },2000);
        })
    
    return ( 
        <div>
        <Link to={'/cart'} >carrito</Link>
        <ItemList lista ={productList} />
        
        </div>
            );
        }

        export default ItemListContainer