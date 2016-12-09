var router = require('express').Router();

var React = require("react");
var ReactDOMServer = require('react-dom/server');

var ProductApp = React.createFactory(require('../client/js/components/ProductApp.jsx'));

router.get('/', function(req, res){
	res.render('product', {
        title: 'E-Com'
        , body: ReactDOMServer.renderToString(ProductApp({}))
        , stringVar: 'Product View'
    });
});

module.exports = router;