
//synchrounous actions
export const setAllItems = items => {
    return {
        type: "SET_ALL_ITEMS", 
        items
    }
}

//asynchronous actions
export const getAllItems = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/items", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
             },
        })
        .then (r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setAllItems(response.data))
            }
        })
        .catch(console.log())
    }
}

