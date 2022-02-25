import { fetchOrders } from './manageOrders.js'

//synchronous action creators
//returns plain JS objects
export const updateSignupForm = formData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }
  
export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
}


export const updateLoginForm = (formData) => {
    return {
        type: "UPDATE_LOGIN_FORM", 
       formData
    }

}

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}


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
export const getCurrentUser = (data) => {
    return (dispatch) => { 
        return fetch("https://bloom-delivery-api.herokuapp.com/api/v1/get_current_user", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then (response => response.json())
        .then(user => {
            if (user.error) {
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(fetchOrders())
            }
        })
        .catch(console.log())
    }
}

export const signup = (credentials, history) => {
    return (dispatch) => {
      const userInfo = {
        user: credentials
      }
      return fetch("https://bloom-delivery-api.herokuapp.com/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(response => response.json())
        .then(user => {
          if (user.error) {
            console.log(user.error)
          } else {
            dispatch(setCurrentUser(user.data))
            dispatch(fetchOrders())
            dispatch(resetSignupForm())
            history.push('/')
            console.log("Creating a new profile as: " + user.data.name + " -- " + user.data.email)
          }
        })
        .catch(console.log)
    }
  }


export const login = (credentials, history) => {
    return dispatch => { 
        return fetch("https://bloom-delivery-api.herokuapp.com/api/v1/login", {
            credentials: "include",
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then (response => response.json())
        .then(user => {
            if (user.error) {
                console.log(user.error)
            } else {
                dispatch(setCurrentUser(user.data))
                dispatch(fetchOrders())
                dispatch(resetLoginForm())
                history.push('/')
                console.log("Logging in as: " + user.data.attributes.name + " -- " + user.data.attributes.email)

                
            }
        })
        .catch(console.log())
    }
}

export const logout = (event) => {
    return (dispatch) => {
        dispatch(clearCurrentUser())
        return fetch('https://bloom-delivery-api.herokuapp.com/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        }),
        console.log("Logout made successfully ✌🏼")
    }
}

