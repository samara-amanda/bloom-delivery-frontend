import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { uniqueId } from 'lodash/uniqueId'

const OrderCard = ({orders}) => {

    return (
        <>
            <div class="slider">
                <ul class="slides">
                    <li>
                        <img src="https://thechicicon.com/wp-content/uploads/2020/02/0-1.jpeg" />
                        <div class="caption center-align">
                            <h2>All Your Items</h2>
                            <h5 class="thin black-text text-lighten-3">They don't say we're the best for nothing. You'll see why.</h5><br></br>
                        </div>
                    </li>
                </ul>
            </div>

            
            {orders.map(order => 
                <div class="order-card center" id={order.id}>
                <h4>Order #{order.id}</h4>
                <h5 class="light grey-text">Order Date: {order.attributes.created_at}</h5>

                
                <div class="row">
                    <div class="col s12 m7">
                        {order.attributes.order_items.map(item =>
                            <div class="card">
                                <div class="card-image">
                                    <img src={item.image} />
                                    <br></br>
                                    <span class="card-title"><Link to="/item">{item.name} </Link></span>
                                </div>
                                        
                                <div class="card-content grey lighten-4">
                                    <p>${item.price}.00</p>      
                                </div>
                            </div>
                        )}
                    </div>
                    <p>Total: $</p>
                </div>

                </div>

            )}
        </>    
        
    )
}


export default (OrderCard)