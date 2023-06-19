import React, { Component } from "react";
import { connect } from 'react-redux'
import { setTimer } from './actions/adminActions'

class Counter extends Component {
  render() {
    return (
      <div className="counterTitle">
        {this.props.setTimer()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    consuptions: state.consuptions
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setTimer: () => { dispatch(setTimer()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)