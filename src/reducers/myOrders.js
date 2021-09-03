
// eslint-disable-next-line 
export default (state = {orders: []}, action) => {
    switch(action.type) {
        case "FETCH_ORDERS":
            return action.orders
        default:
            return state
    }
}
