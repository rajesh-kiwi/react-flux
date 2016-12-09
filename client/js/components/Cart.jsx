var React = require("react");
var ProductActions = require("../actions/ProductActions");
var AppComponents = require("../constants/AppComponents");

var Cart = React.createClass({
    getInitialState: function() {
        return  {
            products: [],
            showComponent: true
        }
    },
    componentDidMount: function() {
        this.setState({
            products: this.props.products,
            showComponent: this.props.showComponent
        });
    },
    componentWillReceiveProps: function(nextProps) {
        this.setState({
            products: nextProps.products,
            showComponent: nextProps.showComponent
        });
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        // return false if u dont want to update component
        //add logic to update component based on nextPros and this.Props OR nextState  and this.state OR BOTH
        return true;
    },
    removeProduct: function(product) {
        ProductActions.removeFromCart(product);
    },
    addOrRemoveQuantity: function(product, add){
        add ? product.quantity += 1 : product.quantity -= 1;
        if(product.quantity <= 0){
            this.removeProduct(product);
        }else{
            ProductActions.updateCartProduct(product.id, product);
        }
    },
    goToHome: function(){
        ProductActions.showHideComponents(AppComponents.PRODUCT, true);
        ProductActions.showHideComponents(AppComponents.CART, false);
    },
    render: function() {
        var that = this;
        var cartProductsTotalPrice = 0;
        var elements = this.state.products.map(function(prod, index){
            cartProductsTotalPrice += prod.price*prod.quantity;
            return(
                <div className="product-div" key={index}>
                    Name: <span>{prod.name}</span><br/>
                    Price: <span>{prod.price}</span><br/>
                    Quantity: <span>{prod.quantity ? prod.quantity : 1}</span>
                    <img src="img/add.png" onClick={that.addOrRemoveQuantity.bind(null, prod, true)} style={{width:"20px", height:"20px"}}/>
                    <img src="img/remove.png" onClick={that.addOrRemoveQuantity.bind(null, prod, false)} style={{width:"20px", height:"20px"}}/>
                    <br/>
                    <button onClick={that.removeProduct.bind(null, prod)}>Remove</button>
                </div>
            )
        });
        return(
            <div>
                <div onClick={this.goToHome}>Home</div>
                <br/><br/>
                {!this.state.products.length ? 'Your cart is empty' : <p>Total Price: Rs {cartProductsTotalPrice}</p>}
                <br/>
                {elements}
                <br/>
            </div>
        )
    }
});

module.exports = Cart;