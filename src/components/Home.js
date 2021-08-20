import React from 'react';
import { Link } from 'react-router-dom'

const Home = ({ currentUser }) => (
    <div>
        { currentUser ? "" : <h3><Link to="/signup">Sign Up</Link> OR <Link to="/login"> Login</Link></h3> }
    </div>
);

export default Home;