
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import Carro  from './cartwidget/cardWidget'
const NavBar  = () => {
    return ( <div className='menu'>
                <img src={logo} className="App-logo" alt="logo" />
                <ul className='nav'>
                    <li className='navItem'>
                        <a  className="navLink" href="#">HOME</a>
                    </li>
                    <li className='navItem'>
                        <a className="navLink" href="#">PRODUCTOS</a>
                    </li>
                    <li className='navItem'>
                        <a  className="navLink" href="#">ABOUT US</a>
                    </li>
                    <li className='navItem'>
                        <a  className="navLink" href="#">CONTACTO</a>
                    </li>
                </ul>   
                <Carro/>
                
            </div>
            );
        }

export default NavBar