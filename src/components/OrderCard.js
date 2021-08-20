import { render } from '@testing-library/react'
import React from 'react'

const OrderCard = ({ order  }) => {
    const items = order.attributes.order_items

    const list = items.map(item => 
        <div key={item.id}>
            <li>
                {item.name} ${item.price}
                <br></br>
                <img src={item.image}  width="150" height="150"/>

            </li>
        </div>
    )
    
    
    return (
        <div key={order.id}>
            <h3>Order #{order.id}</h3>
            <small>Order Date: {order.attributes.created_at}</small>
            <p></p>
            
            <h3>{list}</h3>
            

        </div>
    )
    

    
}

export default OrderCard