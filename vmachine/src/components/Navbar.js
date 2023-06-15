import React from 'react';
import { Link } from 'react-router-dom'
import {   Space } from 'antd';
const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Vending Machine</Link>                    
                    <ul className="right">      
                        <li><Link to="/home"><i className="material-icons">store</i></Link></li>      
                        <Space direction="horizontal" size={100}>            
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>                        
                        <li><Link to="/Admin"><i className="material-icons">settings</i></Link></li>
                        </Space>
                    </ul>
                </div>
            </nav>           
    )
}

export default Navbar;