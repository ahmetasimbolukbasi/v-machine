import React, { Component } from "react";
import { connect } from 'react-redux'
import { setTimer } from './actions/adminActions'


class Counter extends Component {


  render() {
    console.log(`selected!!!!!!  ${this.props.time }`)
    // First Attempts
   /*  setInterval(() => this.props.setTimer(), 1000); */
    return (     
               
      <div className="collection">                 
      <li className="collection-item"><b>Total: {Date(this.props.state.time)} </b></li>
  </div>
    )
  }


}
const mapStateToProps = (state) => {  
  return {
   state:state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setTimer: () => { dispatch(setTimer()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)