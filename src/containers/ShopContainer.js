import { map } from 'async'
import { Component, useEffect, useState }from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { fetchItems } from '../actions/fetchItems'
import { fetchOrders } from '../actions/manageOrders'
import { getCurrentUser } from '../actions/currentUser'
import ShopCard from '../components/ShopCard'
import OrderCard from '../components/OrderCard'
import NavBar from '../components/NavBar'

class ShopContainer extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            items: []
        }
    }

    render() {
        const {loggedIn} = this.props

        return(
            <>
                <Switch>
                    <Route exact path='/shop' render={(routerProps) => <ShopCard {...routerProps} items={this.props.items} />} />
                    <Route exact path='/my-orders' render={(routerProps) => loggedIn ? <OrderCard {...routerProps} orders={this.props.orders} /> : null } />

                </Switch>
            </>
        )
    }

    componentDidMount() {
        this.props.fetchItems()
        this.props.getCurrentUser()
        this.props.fetchOrders() 
    }


}

    const mapStateToProps = state => {
        return {
            items: state.allItems.items,
            orders: state.myOrders.orders,
            loggedIn: state.currentUser
        }
    }

export default connect(mapStateToProps, { fetchItems, fetchOrders, getCurrentUser })(ShopContainer)