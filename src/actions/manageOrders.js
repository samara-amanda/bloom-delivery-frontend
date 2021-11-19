// export function fetchOrders() {
//     return (dispatch) => {
//         fetch("http://localhost:3000/api/v1/orders")
//         .then (resp => resp.json())
//         .then(orders => dispatch({
//             type: "FETCH_ORDERS",
//             orders
//         }))
//     }
// }

// export const setMyOrders = orders => {
//     return {
//         type: "FETCH_ORDERS",
//         payload: orders.data //PAYLOAD
//     }
// }

//asynchronous actions
export const fetchOrders = () => {
    return dispatch => {
        return fetch("https://bloom-delivery-api.herokuapp.com/api/v1/orders", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": '*'
             },
        })
        .then (r => r.json())
        .then(orders => {
            if (orders.error) {
                alert(orders.error)
            } else {
                dispatch({type: 'FETCH_ORDERS', payload: orders.data})
            }
        })
        .catch(console.log())
    }
}
