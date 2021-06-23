//synchronous action creators
//returns plain JS objects
export const setCurrentUser = user => {
    return {
        type:"SET_CURRENT_USER" ,
        user //PAYLOAD
    }
}



// asynchronous action creators
// returns a function, within the function we return a promise

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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log())
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log())
    }
}