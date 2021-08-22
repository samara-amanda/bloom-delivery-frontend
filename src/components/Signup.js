import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const formHandler = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div class="row">
    <form class="col s12" onSubmit={handleSubmit}>
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" class="validate" name="name" value={signupFormData.name} onChange={formHandler}/>
          <label for="icon_prefix">Name</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="text" name="email" class="validate" value={signupFormData.email} onChange={formHandler}/>
          <label for="icon_telephone">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="text" name="password" class="validate" value={signupFormData.password} onChange={formHandler}/>
          <label for="icon_telephone">Password</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="text" name="address" class="validate" value={signupFormData.address} onChange={formHandler}/>
          <label for="icon_telephone">Address</label>
        </div>
        <a class="waves-effect grey lighten-1 btn"><input type="submit" value="Sign Up" /></a>
      </div>
    </form>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)