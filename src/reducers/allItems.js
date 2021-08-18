// eslint-disable-next-line 
export default (state = [], action) => {
    switch(action.type) {
        case "SET_ALL_ITEMS":
            return action.items
        default:
            return state
    }
}
