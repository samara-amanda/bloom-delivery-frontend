import React from 'react';
import Logout from '../components/Logout'

const NavBar = ({currentUser}) => {

    return (
        <div>
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper red lighten-3">
                    <a href="/" className="center brand-logo">Bloom Delivery</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>{ currentUser ? <>Welcome, {currentUser.attributes.name}</> : <a href="signup">Signup</a>}</li>
                        <li>{ !currentUser ?  <a href="login">Login</a> : null}</li>
                        <li>{ currentUser ? <a href="/my-orders">My Orders</a> : null }</li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>{currentUser ? <Logout/> : null }</li>
                    </ul>
                    
                </div>
            </nav>
        </div>
        </div>
        
    )
}

export default NavBar