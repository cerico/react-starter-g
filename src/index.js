import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var ReactRouter = require('react-router');
var PureRenderMixin = require('react-addons-pure-render-mixin');


var browserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('root'))