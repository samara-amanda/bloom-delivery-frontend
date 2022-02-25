import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'

const Logout = ({ logout, history }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            logout()
            history.push('/')
        }}>
            
            <input className="waves-effect waves-teal btn-flat grey-text text-lighten-3 " type="submit" value="Logout" />
        </form>
        
    )
}

export default withRouter(connect(null, { logout })(Logout))

 