import React from 'react'
import { Link } from 'react-router-dom'


const ShopCard = ({ items }) => {
    return (
        
            <div className="shop">
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maison-0311-vef1574-1590173699.jpg" alt="site carousel slide 1" />
                            <div className="caption center-align">
                                <h2>All Items</h2>
                                <h5 className="thin black-text text-lighten-3">They don't say we're the best for nothing. You'll see why.</h5><br></br>
                            </div>
                        </li>
                    </ul>
                </div>
                        
                
                    <div className="row">
                        <div className="shop-card">
                            <div className="col s12 m4">
                                {console.log(items)}
                                {items.map(i =>
                                    <div className="card" key={i.id} name={"shop-card-" + i.id}>
                                        <div className="card-image">
                                            <img className="activator" src={i.attributes.image} alt="item" />
                                            <br></br>
                                            <span className="card-title"><Link to={"/item/" + i.id}>{i.attributes.name}</Link></span>
                                        </div>
                                        <div className="card-content grey lighten-4">
                                            <p>${i.attributes.price}.00</p>      
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
              </div>

    )
}

export default ShopCard
