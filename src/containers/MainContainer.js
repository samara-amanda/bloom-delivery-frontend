import { map } from 'async'
import { Component }from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import Logout from '../components/Logout'
import About from '../components/About'
import Signup from '../components/Signup'
import Home from '../components/Home'
import { getCurrentUser } from '../actions/currentUser.js'
import { Redirect } from 'react-router-dom'


class MainContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        const {loggedIn} = this.props
        return(
            <div>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/signup' render={() => loggedIn ? <Redirect to="/"/> : <Signup/>}/>
                    <Route exact path='/login' render={() => loggedIn ? <Redirect to="/"/> : <Login/>}/>
                    <Route exact path='/about' render={() => <About/>}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      loggedIn: state.currentUser
    })
}
  
export default connect(mapStateToProps, { getCurrentUser })(MainContainer);
