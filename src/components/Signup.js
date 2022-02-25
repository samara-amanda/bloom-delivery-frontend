import React from 'react'
import { connect } from 'react-redux'
import { signup, updateSignupForm } from '../actions/currentUser'


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
    <div className="row">
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s6">
          <input id="name" type="text" className="validate" name="name" value={signupFormData.name} onChange={formHandler}/>
          <label for="name">Name</label>
          <br></br>

        </div>
        </div>

        <div className="row">
        <div className="input-field col s6">
          <input id="email" type="text" name="email" className="validate" value={signupFormData.email} onChange={formHandler}/>
          <label for="email">Email</label>
          <br></br>

        </div>
        </div>

        <div className="row">
        <div className="input-field col s6">
          <input id="password" type="password" name="password" className="validate" value={signupFormData.password} onChange={formHandler}/>
          <label for="password">Password</label>
          <br></br>

        </div>
        </div>

        <div className="row">
        <div className="input-field col s6">
          <input id="address" type="text" name="address" className="validate" value={signupFormData.address} onChange={formHandler}/>
          <label for="address">Address</label>
          <br></br>

        </div>
        </div>
        <br></br>

        <input className="waves-effect pink darken-1 btn" type="submit" value="Sign Up" />
     
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