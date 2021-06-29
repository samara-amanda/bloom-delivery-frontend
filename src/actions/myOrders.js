//synchronous actions
export const setMyOrders = orders => {
    return {
        type:"SET_MY_ORDERS" ,
        orders //PAYLOAD
    }
}

//asynchronous actions
export const getMyOrders = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/orders", {
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
                dispatch(setMyOrders(response.data))
            }
        })
        .catch(console.log())
    }
}