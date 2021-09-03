import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from '../components/Logout'

const NavBar = ({ currentUser }) => {
    return (
        <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper red lighten-3">
                <Link to="/" class="center brand-logo">Bloom Delivery</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>{ currentUser ? <>Welcome, {currentUser.attributes.name}</> : <Link to="signup">Signup</Link>}</li>
                    <li>{ !currentUser ?  <Link to="login" >Login</Link> : null}</li>
                    <li>{ currentUser ? <Link to="/my-orders">My Orders</Link> : null }</li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>{currentUser ? <Logout/> : null }</li>
                </ul>
                
            </div>
        </nav>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)