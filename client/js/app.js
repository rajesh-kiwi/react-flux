var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory } from 'react-router'
import routes from "./lib/shared_routes";
ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('react-app'))