import React from 'react';
import Login from './Login.js'
import Logout from './Logout.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <h1>Welcome to Bloom Delivery</h1>
        <Link to="/signup">Sign Up</Link> OR <Link to="/login"> Login</Link>
    </div>

);



export default Home;