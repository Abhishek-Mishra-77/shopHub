import React from 'react';
import './NavBar.css'
import {
    ShoppingOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    const location = useLocation().pathname;

    return (
        <section id='header' className='p1'>
            <Link to='/' className='brand-logo'>
                <div className='logo'>
                    <div className='dots'>
                        <div className='square-dot first-dot'></div>
                        <div className='square-dot'></div>
                        <div className='square-dot'></div>
                        <div className='square-dot'></div>
                    </div>
                </div>
                <div className='name'>
                    <h3>shophub</h3>
                </div>
            </Link>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-links">
                            <li className="nav-item">
                                <Link to='/' className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/shop' className={`nav-link ${location === '/shop' ? 'active' : ''}`} href="#">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='blog' className={`nav-link ${location === '/blog' ? 'active' : ''}`} href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='contact' className={`nav-link ${location === '/contact' ? 'active' : ''}`} href="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className={`nav-link ${location === '/login' ? 'active' : ''}`} href="#">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/signup" className={`nav-link ${location === '/signup' ? 'active' : ''}`} href="#">SignUp</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='myaccount' className={`nav-link ${location === '/myaccount' ? 'active' : ''}`} href="#">My Account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='cart'>
                <Link to='/cart' className='cart-icon'>
                    <ShoppingOutlined className='cart-button' />
                </Link>
            </div>
        </section >
    )
}

export default Navbar