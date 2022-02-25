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
    return (dispatch) => {
        fetch("https://bloom-delivery-api.herokuapp.com/api/v1/orders", {
            credentials: "include",
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then (response => response.json())
        .then(orders => {
            if (orders.error) {
                console.log(orders.error)
            } else {
                dispatch({type: 'FETCH_ORDERS', payload: orders.data})
            }
        })
        .catch(console.log())
    }
}
