import React from 'react'
import ItemCard from './ItemCard.js'
import { connect } from 'react-redux'


const AllItems = props => {
    const itemCards = props.items.length > 0 ? 
    props.items.map(item => (
        <div key={item.id}> 
            <ItemCard key={item.id} order={item}/>
        </div>  
    )) : null
  
    return itemCards
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}


export default connect(mapStateToProps)(AllItems)