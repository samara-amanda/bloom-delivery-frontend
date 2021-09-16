import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'
import Home from '../components/Home'

const NavBar = ({ currentUser }) => {
    return (
        <div>
        <div class="navbar-fixed">
            <nav>
                <div class="nav-wrapper red lighten-3">
                    <a href="/" class="center brand-logo">Bloom Delivery</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
                        <li>{ currentUser ? <>Welcome, {currentUser.attributes.name}</> : <a href="signup">Signup</a>}</li>
                        <li>{ !currentUser ?  <a href="login">Login</a> : null}</li>
                        <li>{ currentUser ? <a href="/my-orders">My Orders</a> : null }</li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li>{currentUser ? <Logout/> : null }</li>
                    </ul>
                    
                </div>
            </nav>
        </div>
        </div>
        
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)