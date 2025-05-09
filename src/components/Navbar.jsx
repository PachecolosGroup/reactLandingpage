import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/'>About Us</a></li>
                <li className='nav-item'><a href='/'>FAQ</a></li>
                <li className='nav-item'><a href='/'>Contact</a></li>
            </ul>
            <div className='hamburger'onClick={handleClick}> 
                { click ? (<FaTimes size={30} style={{color:'#f8f8f8'}}
                 />) : <FaBars size={30} style={{color:'#f8f8f8'}}/> }
            </div>

        </div>

    )
}

export default Navbar