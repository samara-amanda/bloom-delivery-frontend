import React from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'


const ShopCard = ({ items }) => {
    return (
        
            <div class="shop">
            
                <div class="slider">
                    <ul class="slides">
                        <li>
                            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maison-0311-vef1574-1590173699.jpg" />
                            <div class="caption center-align">
                                <h2>All Items</h2>
                                <h5 class="thin black-text text-lighten-3">They don't say we're the best for nothing. You'll see why.</h5><br></br>
                            </div>
                        </li>
                    </ul>
                </div>
                        
                
                    <div class="row">
                        <div class="shop-card">
                            <div class="col s12 m4">
                                {items.map(i =>
                                    <div class="card" key={i.id} name={"shop-card-" + i.id}>
                                        <div class="card-image">
                                            <img class="activator" src={i.attributes.image} alt="item" />
                                            <br></br>
                                            <span class="card-title"><Link to="/item">{i.attributes.name}</Link></span>
                                        </div>
                                        <div class="card-content grey lighten-4">
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
