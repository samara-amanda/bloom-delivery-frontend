import React from 'react';
import { connect } from 'react-redux'


const NavBar = ({ currentUser }) => {
    return (
        <div className="nav">
            { currentUser ? <p>Welcome, {currentUser.attributes.name}</p> : "" }
        

            
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)