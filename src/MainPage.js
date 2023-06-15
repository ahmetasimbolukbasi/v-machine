import React, { } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Admin from './components/Admin';
import Welcome from './components/Welcome';

function AnaPencere() {
  return (
    <div className="main">      
     <BrowserRouter>
            <div className="App">            
              <Navbar/>
                <Switch>                    
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Cart" component={Cart}/>
                    <Route path="/Admin" component={Admin}/>
                  </Switch>
             </div>
       </BrowserRouter>
    </div>
  );
}

export default AnaPencere;