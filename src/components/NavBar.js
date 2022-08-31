
import logo from '../logo.svg'
const NavBar  = () => {
    return ( <div className='menu'>
                <img src={logo} className="App-logo" alt="logo" />
                <ul className='nav'>
                    <li className='navItem'>
                        <a class="navLink" href="#">HOME</a>
                    </li>
                    <li className='navItem'>
                        <a class="navLink" href="#">PRODUCTOS</a>
                    </li>
                    <li className='navItem'>
                        <a class="navLink" href="#">ABOUT US</a>
                    </li>
                    <li className='navItem'>
                        <a class="navLink" href="#">CONTACTO</a>
                    </li>
                </ul>   
            </div>
            );
        }

export default NavBar