import data from '../../components/MockData'
import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer  = ({greeting}) => {

    const [productList, setProductList] = useState([])

    useEffect(()  => {getProducts.then((response) => {
        setProductList(response)
    })
    .catch((error) => console.error(error));
    }, [])

    const getProducts = new Promise ((resolve, reject) => {
           
            setTimeout(() =>{
                resolve(data);
            },2000);
        })
    
    return ( 
        <ItemList lista ={productList} />
            );
        }

        export default ItemListContainer