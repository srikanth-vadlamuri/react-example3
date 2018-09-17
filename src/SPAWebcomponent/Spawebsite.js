import React from 'react';
import {HashRouter, NavLink, Route , BrowserRouter,Redirect} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Friends from './Friends'
import Notfound from './NotFound'

class Spawebsite extends React.Component {
    render() { 
        return ( 
            <BrowserRouter>
                <div>
                <h1>SPA in React</h1>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink exact to="/Friends">Friends</NavLink></li>
                </ul>
                
                <div>
                    
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route exact strict path="/Friends" component={Friends}/>
                    <Redirect to="/"/>
                </div>
                </div>
            </BrowserRouter>
         );
    }
}
 
export default Spawebsite;