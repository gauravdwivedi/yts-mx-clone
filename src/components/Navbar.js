import React from 'react'
import {Link,Route} from 'react-router-dom'
import logo from '../assets/yts.mx.png'
import Home from './Home'
import './Navbar.css'


export default function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'>
                <img src={logo} alt="Logo"/>
            </Link><Route path="/" component={Home}/>
        </div>
    )
}
