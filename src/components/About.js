import React from 'react'

const AboutCard = () => {
    return (
        <>

            <div class="slider">
                <ul class="slides">
                    <li>
                        <img  src="https://www.datocms-assets.com/9364/1558461271-the-vaan-group-client-venus-et-fleur.jpg" />
                        <div class="caption center-align">
                            <h2>About Us</h2>
                            <h5 class="thin text-lighten-3">Learn about our story, where this all started. </h5><br></br>
                        </div>
                    </li>
                </ul>
            </div>

            <h4 class="thin grey-text">The Creator of this AMAZING mock Venus Et Fluer e-commerce app... <br></br>Samara Grant.</h4>
            <p> Bloom Delivery was created as my final capstone project at Flatiron School. <br></br>
                A MVP single page application with a backend API that demonstrates client-sever communication.<br></br>
                The stack that I used to create Bloom Delivery: </p>

                <h5>Frontend</h5>
                <ul>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Materialize</li>
                </ul>

                <h5>Backend/API</h5>
                <ul>
                    <li>Ruby</li>
                    <li>Rails</li>
                </ul>

                <h6><a href="https://github.com/samaracodes/bloom-delivery-frontend">Link to this Github Repo</a></h6>
                <p></p>
                
                

            
        </>
    )

}

export default AboutCard