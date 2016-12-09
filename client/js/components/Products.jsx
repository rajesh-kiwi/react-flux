var React = require("react");
var ProductStore = require("../stores/ProductStore");
var ProductActions = require("../actions/ProductActions");
var AppComponents = require("../constants/AppComponents");

var Products = React.createClass({
    getInitialState: function() {
        return  {
            products: [],
            productsIncart: [],
            showComponent: true
        }
    },
    componentDidMount: function() {
        this.setState({
            products: this.props.products,
            productsIncart: this.props.productsIncart,
            showComponent: this.props.showComponent
        });
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            products: nextProps.products,
            productsIncart: nextProps.productsIncart,
            showComponent: nextProps.showComponent
        });
    },
    addTocart: function(prod) {
        var product = JSON.parse(JSON.stringify(prod));
        if(!product.quantity){
            product.quantity = 1;
        }
        ProductActions.addToCart(product);
    },
    showCart: function() {
        ProductActions.showHideComponents(AppComponents.PRODUCT, false);
        ProductActions.showHideComponents(AppComponents.CART, true);
    },
    render: function() {
        var that = this;
        var elements = this.state.products.map(function(prod, index){
            return(
                <div className="product-div" key={index}>
                    Name: <span>{prod.name}</span><br/>
                    Price: <span>{prod.price}</span> <br/>
                    <button onClick={that.addTocart.bind(null, prod)}>Add to cart</button>
                </div>
            )
        });
        return(
            <div>
                <span style={{"marginLeft": "1%"}}>Total Number of products {this.state.productsIncart.length}</span>
                <span onClick={this.showCart} style={{float: "right", "marginRight": "10%"}}>
                    {this.state.productsIncart.length}
                    <img style={{width:"40px", height:"40px"}} src="img/cart.png" />
                </span>
                <br/><br/><br/>
                {elements}
            </div>
        )
    }
});

module.exports = Products;