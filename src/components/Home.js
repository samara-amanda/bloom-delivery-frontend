import React from 'react';

const Home = () => {

    return (
            <div className="slider fullscreen">
                <ul className="slides">
                    <li>
                        <img src="download.jpeg" alt="site carousel slide 1" />
                        <div className="caption center-align">
                        <h2>Welcome to Bloom Delivery!</h2>
                        <h5 className="thin black-text text-lighten-3">These iconic arrangements embody everything Bloom Delivery–sophistication and class. Real Roses That Last A Year.</h5><br></br>
                        <a className="waves-effect waves-light pink lighten-1 btn" href="/shop">SHOP</a>
                        </div>
                    </li>

                    <li>
                        <img src="https://cdn.shopify.com/s/files/1/0859/1856/files/zft3.jpg?v=1597335801" alt="site carousel slide 2" />
                        <div className="caption left-align">
                        <h3>Most Gifted</h3>
                        <h5 className="thin grey-text text-lighten-3">Shop our most popular Eternity® Flower arrangements.</h5>
                        </div>
                    </li>

                    <li>
                    <img src="https://cdn.shopify.com/s/files/1/0859/1856/files/evileyeblog_2.jpg?v=1564608321" alt="site carousel slide 3" />
                        <div className="caption right-align">
                        <h3 className=" blue-text text-darken-4">Personalized Perfection</h3>
                        <h5 className="thin light grey-text text-lighten-3">Looking for something a little more personal? <br></br>Design your very own custom arrangement.</h5>
                        </div>
                    </li>

                    <li>
                        <img src="https://imgix.bustle.com/uploads/image/2019/10/30/b954c9d2-75c3-42f1-bb9d-ae2f1202b9b2-venus-et-fleur-main.png?w=1200&fit=crop&crop=faces&auto=format%2Ccompress" alt="site carousel slide 4"/>
                        <div className="caption left-align">
                        <h3 className="pink-text text-darken-1">The Zodiac Collection</h3>
                        <h5 className="thin grey-text text-lighten-3">Check out our new zodiac collection! <br></br> You're not gonna wanna miss it.
                        </h5>
                        </div>
                    </li>
                </ul>
            </div>    
    )
}

export default Home;
