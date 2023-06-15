import React, { Component } from 'react';
import { connect } from 'react-redux'
import { refund } from './actions/cartActions'
import resim1 from "../images/vm.jpg";
import { Link } from 'react-router-dom'

 class Welcome extends Component{
    
    render(){   

        return(
            <div className="container" >    
              <div className="container2" style={{position: 'absolute',left: '50%',top: '50%',transform: ' translate(-50%, -50%)'}} >       
                         
                <Link to="/home"> <img src={resim1} ></img>    </Link>  
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