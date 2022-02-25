export function fetchItems() {
    return (dispatch) => {
        fetch("http://bloom-delivery-api.herokuapp.com/api/v1/items")
        .then (resp => resp.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMS',
            payload: items.data
        }))
    }
}

