import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Link } from 'react-router-dom'

class Home extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>
                    <div className="card-image">                        
                        <img src={item.img} alt={item.title} />
                        <span className="card-title">{item.title}</span>
                        <Link to="/home"> <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" disabled={(item.sayi <= 0)} onClick={() => { this.handleClick(item.id) }}><i className="material-icons">add</i></span></Link>
                        <b>  <span className="quantity-item">Stock:{item.sayi}</span></b>
                    </div>
                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}₺</b></p>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <h3 className="Left">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)