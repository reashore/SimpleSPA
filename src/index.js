
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import {Router, Route, IndexRoute} from 'react-router';
//import Home from './Home';

ReactDOM.render(
    <Router>
        <Route path="/" component="{App}">
            {/* <IndexRoute component={Home}/> */}
        </Route>
    </Router>,

    document.getElementById('root')); 

registerServiceWorker();
