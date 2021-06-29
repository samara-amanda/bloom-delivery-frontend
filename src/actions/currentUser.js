import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getMyOrders } from './myOrders.js'

//synchronous action creators
//returns plain JS objects
export const setCurrentUser = user => {
    return {
        type:"SET_CURRENT_USER" ,
        user //PAYLOAD
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
// returns a function, within the function we return a promise
export const signup = (info, history) => {
    return dispatch => {
      const userInfo = {
        user: info
      }
      return fetch("http://localhost:3000/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyOrders())
            dispatch(resetSignupForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }


export const login = credentials => {
    return dispatch => { 
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then (r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log())
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => { 
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then (r => r.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(getMyOrders())
            }
        })
        .catch(console.log())
    }
}