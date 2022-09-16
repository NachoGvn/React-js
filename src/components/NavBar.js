
import logo from '../logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import Carro  from './cartwidget/cardWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const NavBar  = () => {
    return ( <div className='menu'>
                <img src={logo} className="App-logo" alt="logo" />
                <ul className='nav'>
                    <li className='navItem'>
                        <NavLink to={'/home'} style={({isActive}) => isActive ? {color: 'red'} :{color: 'black'}} className="navLink">HOME</NavLink>
                    </li>
                    <li className='navItem'>
                    <NavLink to={'/productos'} style={({isActive}) => isActive ? {color: 'red'} :{color: 'black'}} className="navLink">PRODUCTOS</NavLink>
                    </li>
                    <li className='navItem'>
                    <NavLink to={'/aboutus'} style={({isActive}) => isActive ? {color: 'red'} :{color: 'black'}} className="navLink">ABOUT US</NavLink>
                    </li>
                    <li className='navItem'>
                    <NavLink to={'/contacto'} style={({isActive}) => isActive ? {color: 'red'} :{color: 'black'}} className="navLink">CONTACTO</NavLink>
                    </li>
                </ul>   
                <Carro/>
                
            </div>
            );
        }

export default NavBar