import { map } from 'async'
import { Component }from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { fetchItems } from '../actions/fetchItems'
import { fetchOrders } from '../actions/manageOrders'
import { getCurrentUser } from '../actions/currentUser'
import ShopCard from '../components/ShopCard'
import OrderCard from '../components/OrderCard'
import NavBar from '../components/NavBar'

class ShopContainer extends Component {

    render() {
        const {loggedIn} = this.props

        return(
            <div>
                <Switch>
                    <Route exact path='/shop' render={(routerProps) => <ShopCard {...routerProps} items={this.props.items.items} />} />
                    {/* <Route exact path='/my-orders' render={(routerProps) => loggedIn ? <OrderCard {...routerProps} orders={this.props.orders.orders} /> : "" } /> */}

                </Switch>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchItems()
        this.props.fetchOrders()
        this.props.getCurrentUser()
    }
}

    const mapStateToProps = state => {
        return {
            items: state.items,
            orders: state.orders,
            loggedIn: !!state.currentUser
        }
    }

export default connect(mapStateToProps, { fetchItems, fetchOrders, getCurrentUser })(ShopContainer)