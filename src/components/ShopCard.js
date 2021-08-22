import React from 'react'
import { Link } from 'react-router-dom'

const ShopCard = ({ items }) => {
    return (
        <div className="shop-list">
            {items.map(i => 
        <div key={i.id} name={"shop-card-" + i.id}>
            <ul>
                <li>
                <center>
                    <h3>
                        <Link to="/item">
                            {i.attributes.name}
                        </Link>
                    </h3>
                    <img src={i.attributes.image} height="200" width="200" alt="item" />
                    <br></br>
                    <h4>
                        ${i.attributes.price}
                    </h4>
                </center>
                </li>
            </ul>
        </div>
    )}
        </div>
    )
}

export default ShopCard