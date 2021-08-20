import { map } from 'async'
import { Component }from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router'
import { fetchItems } from '../actions/fetchItems'
import ShopCard from '../components/ShopCard'
import NavBar from '../components/NavBar'

class ShopContainer extends Component {

    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/shop' render={(routerProps) => <ShopCard {...routerProps} items={this.props.items.items} />} />
                </Switch>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchItems()
    }
}

    const mapStateToProps = state => {
        return {
            items: state.items
        }
    }

export default connect(mapStateToProps, { fetchItems })(ShopContainer)