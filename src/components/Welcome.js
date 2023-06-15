import React, { Component } from 'react';
import { connect } from 'react-redux'
import { refund } from './actions/cartActions'

 class Welcome extends Component{
    
    render(){   

        return(
            <div className="container">
                <h1 className="w1">WELCOME</h1>
                <div className="box">          
                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.props.refund() }}>ENTER</button>
               
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{    
    return {
        state: state
    }
  }
const mapDispatchToProps= (dispatch)=>{    
    return{
        refund: () => { dispatch(refund()) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)