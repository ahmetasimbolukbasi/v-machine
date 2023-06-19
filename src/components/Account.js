import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Select, Space } from 'antd';
import { addMoney, refund } from './actions/cartActions'


class Account extends Component {
    handleClick = (value) => {
        this.props.addMoney(value);
    };
    onChange = (value) => {
        this.value = value
    };
    render() {
        const BanknotBox = () => (
            <Space wrap>
                <Select
                    onChange={this.onChange}
                    defaultValue={this.value}
                    style={{
                        width: 120,
                    }}
                    options={[
                        {
                            value: 25,
                            label: '25₺',
                        },
                        {
                            value: 35,
                            label: '35₺',
                        },
                        {
                            value: 45,
                            label: '45₺',
                        },
                    ]}
                />
            </Space>
        );

        return (
            <div className="containerAccount">
                <div className="collection">
                    <li className="collection-item"><b>Total Cash: {this.props.consumerCashTotal} ₺</b></li>
                </div>
                <div className="add">
                    <BanknotBox>
                    </BanknotBox>
                    <button className="waves-effect waves-light btn" onClick={() => { this.handleClick(this.value) }}> add CASH</button>
                    <button className="waves-effect waves-light btn pink remove" onClick={() => { this.props.refund() }}>REFUND</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        consumerCashTotal: state.consumerCashTotal
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addMoney: (value) => { dispatch(addMoney(value)) },
        refund: () => { dispatch(refund()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
