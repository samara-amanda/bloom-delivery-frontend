import React from 'react';
import { connect } from 'react-redux'

const NavBar = ({ currentUser }) => {
    return (
        <div className="nav">
            <h1>Bloom Delivery</h1>
            { currentUser ? <h3>Welcome, {currentUser.attributes.name}</h3> : "" }
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)