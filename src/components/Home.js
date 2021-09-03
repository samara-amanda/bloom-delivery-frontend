import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({ currentUser }) => {
    return (
        <div>
            <center>
            <img class="materialboxed " src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/31841937_926683800824343_2841788991416565760_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_ohc=HaSd4_MP2J8AX9z_BWx&_nc_ht=scontent-lga3-1.xx&oh=36566cdf96b807ab3eaf37a351e36508&oe=6146513F" width="1300" height="750" />
            </center>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(Home);