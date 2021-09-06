import React from 'react'
import { Link } from 'react-router-dom'

const ShopCard = ({ items }) => {
    return (
        
            <div class="shop">
                
                <center>
                <img class="materialboxed" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/maison-0311-vef1574-1590173699.jpg" width="1300" height="760"/>

                <div class="caption center-align">
                    <h5 class="light grey-text text-ighten-3 hide-on-small-only">Shop all of our new favorites!</h5>
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
                    </center>
            </div>

    )
}

export default ShopCard
