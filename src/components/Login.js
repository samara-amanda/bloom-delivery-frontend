import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginForm, updateLoginForm, login }) => {
    
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }

    return (

        <div class="row">
            <form class="col s12" onSubmit={handleSubmit}>
            <div class="row">
                <div class="input-field col s6">
                <input id="icon_prefix" type="text" class="validate" name="email" value={loginForm.email} onChange={handleInputChange}/>
                <label for="icon_prefix">Email</label>
                </div>
                <div class="input-field col s6">
                <input id="icon_prefix" type="password" class="validate" name="password" value={loginForm.password} onChange={handleInputChange}/>
                <label for="icon_prefix">Password</label>
                </div>
                <a class="waves-effect grey lighten-1 btn"><input type="submit" value="Login" /></a>            </div>
            </form>
        </div>
    )
}


const mapStateToProps = state => {
    //gives us access to these chunks of state from the store as props. 
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)