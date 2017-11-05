
import React from 'react';
import ReactDOM from 'react-dom';
//import ReactRouter from 'react-router';
//import {Router, Route} from 'react-router';
import ReactRouter from 'react-router';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import Home from './Components/Home';
var {Router, Route, IndexRoute, IndexLink, Link} = ReactRouter;

ReactDOM.render(
    <Router>
        <Route path="/" component="{App}">
            <IndexRoute component={Home}/>
            <Route path="Home" component="{Home}"/>
            <Route path="about" component="{About}"/>
            <Route path="contact" component="{Contact}"/>
        </Route>
    </Router>,

    document.getElementById('root')); 

registerServiceWorker();
