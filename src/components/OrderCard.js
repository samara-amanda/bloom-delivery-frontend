import { render } from '@testing-library/react'
import React from 'react'

const OrderCard = (props) => {

    // const list = orders.map(order => {
    //     order.attributes.order_items.map(item => {
    //         <div key={item.id}>
    //             <li>
    //                 {item.attributes.order_items.name} ${item.attributes.order_items.price}
    //                 <br></br>
    //                 <img src={item.attributes.order_items.image}  width="150" height="150"/>

    //             </li>
    //         </div>
    //     })
        
    // })
    {console.log(props)}

    
    return (
        <div >
            
            {/* <h3>
                {orders.map(order => {
                    <>
                    
                    <h3>Order #{order.id}</h3>
                    <p>Order Date: {order.created_at}</p>

                    </>

                    order.attributes.order_items.map(item => {
                        <div key={item.id}>
                            <li>
                                {item.attributes.order_items.name} ${item.attributes.order_items.price}
                                <br></br>
                                <img src={item.attributes.order_items.image}  width="150" height="150"/>
                            </li>
                        </div>
                    })
                })}
            </h3> */}
        </div>
    )
    

    
}

export default OrderCard