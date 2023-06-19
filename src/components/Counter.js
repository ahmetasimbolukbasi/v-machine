import React, { Component } from "react";
import { connect } from 'react-redux'
import { setTimer } from './actions/adminActions'
import Heartbeat from 'react-heartbeat';
class Counter extends Component {
  render() {
    return (      
        <Heartbeat heartbeatFunction={this.props.setTimer} heartbeatInterval={1000} />    
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setTimer: () => { dispatch(setTimer()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)