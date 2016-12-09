var React = require("react");
var ProductStore = require("../stores/ProductStore");
var ProductActions = require("../actions/ProductActions");

var Products = require("./Products.jsx");
var Cart = require("./Cart.jsx");

function getAppState() {
    return {
        products: ProductStore.getProducts(),
        productsIncart: ProductStore.getCartProducts(),
        showProductComponent: ProductStore.showProductComponent(),
        showCartComponent: ProductStore.showCartComponent(),
    };
}

var Product = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        this.bindEvents();
        ProductActions.getProducts();
    },
    componentWillUnmount: function() {
       this.removeEvents();
    },
    bindEvents: function(){
        ProductStore.addChangeListener('change', this._onChange);
        ProductStore.addChangeListener('test', this._onTest);
    },
    removeEvents: function(){
        ProductStore.removeChangeListener('change', this._onChange);
        ProductStore.removeChangeListener('test', this._onTest);
    },
    _onChange: function() {
        this.setState(getAppState());
    },
    _onTest: function() {
        console.log("on test evt");
    },
    render: function() {
        return(
            <div>
                {this.state.showProductComponent ? <Products products={this.state.products} productsIncart={this.state.productsIncart} showComponent={this.state.showProductComponent}/> : ""}
                {this.state.showCartComponent ? <Cart products={this.state.productsIncart} showComponent={this.state.showCartComponent}/> : "" }
            </div>
        )
    }
});

module.exports = Product;