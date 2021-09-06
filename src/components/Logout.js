import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {
    return (
        <form onSubmit={logout}>
            <a class="waves-effect waves-teal btn-flat"><input class="grey-text text-lighten-3 " type="submit" value="Logout" /></a>
        </form>
        
    )
}

export default connect(null, { logout })(Logout)

 