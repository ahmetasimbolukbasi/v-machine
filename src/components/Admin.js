import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { incQuantityItem, decQuantityItem, incPrice, decPrice, reset, getTotalCashMachine } from './actions/adminActions'
import { Col, Row } from 'antd';

class Admin extends Component {
    handleRemove = (id) => {
        console.log(`selected  ${id}`);
        this.props.removeItem(id);
    }

    render() {
        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}₺</b></p>
                                <div className="add-remove">
                                    <Link to="/Admin"><i className="material-icons" onClick={() => { this.props.incPrice(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/Admin"><i className="material-icons" onClick={() => { this.props.decPrice(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <p>
                                    <b>Quantity: {item.sayi}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/Admin"><i className="material-icons" onClick={() => { this.props.incQuantityItem(item.id) }}>arrow_drop_up</i></Link>
                                    <Link to="/Admin"><i className="material-icons" onClick={() => { this.props.decQuantityItem(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                            </div>
                        </li>
                    )
                })
            ) :
            (
                <p>Nothing.</p>
            )
        let energyConsuptions = this.props.consuptions.length ?
            (
                this.props.consuptions.map(consp => {
                    return (
                        <li className="collection-item avatar" key={consp.id}>

                            <div className="item-desc">
                                <span className="title">{consp.title}</span>
                                <p>{consp.desc}</p>
                                <p><b>Price: {consp.price}₺/sec</b></p>
                                <div className="add-remove">
                                </div>
                                <p>
                                    <b>Working Time: {consp.sayi}sec</b>
                                </p>
                                <div className="add-remove">
                                </div>
                            </div>
                        </li>
                    )
                })
            ) :
            (
                <p>Nothing.</p>
            )
        return (
            <div className="container" style={{ position: 'absolute', left: '50%', top: '50%', transform: ' translate(-50%, -50%)' }} >
                <Row>
                    <Col span={10} >
                        <div className="cart">
                            <h5>Order List</h5>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                        </div>
                    </Col>
                    <Col span={12} offset={2}>
                        <div className="cart">
                            <h5>EnergyConsuption List</h5>
                            <ul className="collection">
                                {energyConsuptions}
                                <div className="containerenergycosnsp">
                                    <div className="collection">
                                        <li className="collection-item"><b>Total Consuption: {this.props.totalEnergyConsumption} ₺</b></li>
                                    </div>
                                </div>
                            </ul>
                            <Link to="/Admin"> <button className="waves-effect waves-light btn pink remove" onClick={() => { this.props.reset() }}>RESET ALL MACHINE</button></Link>
                           
                        </div>
                        <div className="cart" style={{ backgroundColor: "gray" }}>
                            <h5>Cash Box</h5>
                            <p className="collection-item"><b>Total: {this.props.adminCashTotal} ₺</b></p>
                            <button className="waves-effect waves-light btn pink remove" onClick={() => { this.props.getTotalCashMachine() }}>TAKE ALL</button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        consuptions: state.consuptions,
        adminCashTotal: state.adminCashTotal,
        totalEnergyConsumption: state.totalEnergyConsumption
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        incQuantityItem: (id) => { dispatch(incQuantityItem(id)) },
        decQuantityItem: (id) => { dispatch(decQuantityItem(id)) },
        incPrice: (id) => { dispatch(incPrice(id)) },
        decPrice: (id) => { dispatch(decPrice(id)) },
        getTotalCashMachine: (id) => { dispatch(getTotalCashMachine()) },

        reset: (id) => { dispatch(reset(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)