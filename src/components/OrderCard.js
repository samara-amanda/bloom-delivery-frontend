import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = ({orders}) => {

    return (
        <div className="my-orders-container">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="https://thechicicon.com/wp-content/uploads/2020/02/0-1.jpeg" alt="Site carousel"/>
                        <div className="caption center-align">
                            <h2>All Your Items</h2>
                            <h5 className="thin black-text text-lighten-3">They don't say we're the best for nothing. You'll see why.</h5><br></br>
                        </div>
                    </li>
                </ul>
            </div>

            
            {orders.map(order => 
                <div className="order-card center" id={order.id}>
                <h4>Order #{order.id}</h4>
                <h5 className="light grey-text">Order Date: {order.attributes.created_at}</h5>

                
                <div className="row">
                    <div className="col s12 m7">
                        {order.attributes.order_items.map(item =>
                            <div className="card">
                                <div className="card-image">
                                    <img src={item.image}alt="order-item" />
                                    <br></br>
                                    <span className="card-title"><Link to="/item">{item.name} </Link></span>
                                </div>
                                        
                                <div className="card-content grey lighten-4">
                                    <p>${item.price}.00</p>      
                                </div>
                            </div>
                        )}
                    </div>
                    <p>Total: $</p>
                </div>

                </div>

            )}
        </div>    
        
    )
}


export default (OrderCard)