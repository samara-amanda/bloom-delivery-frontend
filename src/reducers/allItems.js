// eslint-disable-next-line 
export default (state = {items: []}, action) => {
    switch(action.type) {
        case "FETCH_ITEMS":
            return {
                items: action.payload
            } 
        default:
            return state
    }
}
