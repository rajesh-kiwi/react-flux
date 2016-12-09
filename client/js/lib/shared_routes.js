import { Route,IndexRoute } from "react-router";  
import React from "react";

var Main = require('../components/Main.jsx').Main;
var ProductApp = require('../components/ProductApp.jsx');

export default (  
	<Route component={ Main } path={'/'} >
		<IndexRoute component={ProductApp} />
	</Route>
);
var someAuthCheck = function(nextState, transition) { console.log('t-----'); }