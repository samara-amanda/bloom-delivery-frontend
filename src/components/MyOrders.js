import React from 'react'
import OrderCard from './OrderCard.js'
import { connect } from 'react-redux'


const MyOrders = props => {
    const orderCards = props.orders.length > 0 ? 
    props.orders.map(order => (
        <div key={order.id}> 
            <OrderCard key={order.id} order={order}/>
        </div>  
    )) : null
  
    return orderCards
  }

const mapStateToProps = state => {
    return {
        orders: state.myOrders
    }
}

export default connect(mapStateToProps)(MyOrders)