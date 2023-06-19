import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkOut } from './actions/cartActions'
class Recipe extends Component {

    handleClick = () => {
        this.props.checkOut()
    }
    render() {
        return (
            <div className="containerRecipe">
                <div className="collection">
                    <li className="collection-item"><b>Total: {this.props.total} ₺</b></li>
                </div>
                <div className="checkout">
                    <button disabled={!((this.props.consumerCashTotal >= this.props.total) && !(this.props.consumerCashTotal === 0))} className="waves-effect waves-light btn" onClick={this.handleClick} >Checkout</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total,
        consumerCashTotal: state.consumerCashTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkOut: () => { dispatch(checkOut()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
