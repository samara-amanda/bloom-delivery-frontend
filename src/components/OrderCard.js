import { render } from '@testing-library/react'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const OrderCard = ({orders}) => {

    return (
        
        <div>
            <img class="activator" src="https://thechicicon.com/wp-content/uploads/2020/02/0-1.jpeg" height="700"/>
            
            {orders.map(order => 
                    <div class="order-card">
                <h4>Order #{order.id}</h4>
                <h5 class="light grey-text">Order Date: {order.attributes.created_at}</h5>

                <div>
                <div class="row" key={order.id}>
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
                </div>                

            )}
            </div>    
        
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders
    }
}

export default connect(mapStateToProps)(OrderCard)