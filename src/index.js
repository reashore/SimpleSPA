
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>,

    document.getElementById('root'));     

registerServiceWorker();
