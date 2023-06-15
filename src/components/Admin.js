import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { incQuantityItem, decQuantityItem, incPrice, decPrice, reset } from './actions/adminActions'
import { Space } from 'antd';
class Admin extends Component {

    //to remove the item completely
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
                                <p><b>Price: {consp.price}₺</b></p>
                                <div className="add-remove">

                                </div>
                                <p>
                                    <b>Working Time: {consp.sayi}</b>
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
            <div className="containerAdminOrderList">
                <Space size={300}>
                    <div className="cart">
                        <h5>Order List</h5>
                        <ul className="collection">
                            {addedItems}

                        </ul>
                    </div>
                    <Space size={15}>
                        <div className="TotalMachineCash">
                        <h5>PROMPT CASH</h5>
                        <p className="collection-item"><b>{this.props.adminCashTotal} ₺</b></p>
                            <button className="waves-effect waves-light btn pink remove" onClick={() => { }}>TAKE ALL</button>
                        </div>                       
                    </Space>
                    <div className="cart">
                        <h5>EnergyConsuption List</h5>
                        <ul className="collection">
                            {energyConsuptions}
                            <div className="containerenergycosnsp">
                                <div className="collection">
                                    <li className="collection-item"><b>Total Consuption: {this.props.total} ₺</b></li>
                                </div>
                            </div>                            
                        </ul>
                        <button className="waves-effect waves-light btn pink remove" onClick={() => { this.props.reset() }}>RESET ALL MACHINE</button>
                    </div>
                </Space>



            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.items,
        consuptions: state.consuptions,
        adminCashTotal:  state.adminCashTotal
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        incQuantityItem: (id) => { dispatch(incQuantityItem(id)) },
        decQuantityItem: (id) => { dispatch(decQuantityItem(id)) },
        incPrice: (id) => { dispatch(incPrice(id)) },
        decPrice: (id) => { dispatch(decPrice(id)) },
        
        reset: (id) => { dispatch(reset(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)