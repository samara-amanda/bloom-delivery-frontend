import React from 'react'
import { connect } from 'react-redux'
import { login, updateLoginForm } from '../actions/currentUser'

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

        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="email" type="text" className="validate" name="email" value={loginForm.email} onChange={handleInputChange}/>
                        <label for="email">Email</label>
                    </div>

                    <div className="input-field col s6">
                        <input id="password" type="password" className="validate" name="password" value={loginForm.password} onChange={handleInputChange}/>
                        <label for="password">Password</label>
                    </div>
                    
                    <input type="submit" value="Login" className="waves-effect pink darken-1 btn"/>
                </div>
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