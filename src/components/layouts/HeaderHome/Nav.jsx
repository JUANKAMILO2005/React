import { Link } from 'react-router-dom'
import React, {useState} from "react";
import './Header.css'

const Nav = () => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className='nav_logo'> Hola Mundo! </div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <Link to="/">Home</Link>
            <Link to="/usestate">UseState</Link>
            <Link to="/useeffect">UseEffect</Link>
            <Link to="/changecolor">ChangeColor</Link>
            <Link to="/tweets">Tweets</Link>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    
    )
}
export default Nav
