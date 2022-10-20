import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Carro  = () => {
    return ( 
        
                <Link to={'/cart'}> 
                <FontAwesomeIcon icon={faCartShopping} className='carro'/> 
                </Link> 
            
            );
        }

        export default Carro
