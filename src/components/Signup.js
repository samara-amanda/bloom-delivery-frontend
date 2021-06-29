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
    <form onSubmit={handleSubmit}>
      <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={formHandler} />
      <input placeholder="email" value={signupFormData.email} name="email" type="text" onChange={formHandler} />
      <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={formHandler} />
      <input placeholder="address" value={signupFormData.address} name="address" type="text" onChange={formHandler} />
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)