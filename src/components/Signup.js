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
          <input id="name" type="text" class="validate" name="name" value={signupFormData.name} onChange={formHandler}/>
          <label for="name">Name</label>
          <br></br>

        </div>
        </div>

        <div class="row">
        <div class="input-field col s6">
          <input id="email" type="text" name="email" class="validate" value={signupFormData.email} onChange={formHandler}/>
          <label for="email">Email</label>
          <br></br>

        </div>
        </div>

        <div class="row">
        <div class="input-field col s6">
          <input id="password" type="password" name="password" class="validate" value={signupFormData.password} onChange={formHandler}/>
          <label for="password">Password</label>
          <br></br>

        </div>
        </div>

        <div class="row">
        <div class="input-field col s6">
          <input id="address" type="text" name="address" class="validate" value={signupFormData.address} onChange={formHandler}/>
          <label for="address">Address</label>
          <br></br>

        </div>
        </div>
        <br></br>

        <a class="waves-effect pink darken-1 btn"><input type="submit" value="Sign Up" /></a>
     
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