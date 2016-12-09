var ProductApi = require("../utils/ProductApi.js");
var AppDispatcher = require("../dispatcher/AppDispatcher");
var ProductConstants = require("../constants/ProductConstant");
var AppComponents = require("../constants/AppComponents");

var getProducts = function(){
    ProductApi.getProducts(function(result){
        loadProducts(result);
    });
}

var loadProducts = function(data) {
    AppDispatcher.handleAction({
        actionType: ProductConstants.LOAD_PRODUCTS,
        data: data
    })
}

var updateCartProduct = function(id, product) {
    AppDispatcher.handleAction({
        actionType: ProductConstants.UPDATE_CART_PRODUCTS,
        id: id,
        product: product
    })
}

var addToCart = function(product) {
    AppDispatcher.handleAction({
        actionType: ProductConstants.ADD_TO_CART,
        data: product
    })
}

var removeFromCart = function(product) {
    AppDispatcher.handleAction({
        actionType: ProductConstants.REMOVE_FROM_CART,
        data: product
    })
}

var showHideComponents = function(component, show) {
    AppDispatcher.handleAction({
        actionType: ProductConstants.SHOW_HIDE_COMPONENTS,
        component: component,
        show: show
    })
}

var test = function() {
    AppDispatcher.handleAction({
        actionType: ProductConstants.TEST
    })
}

module.exports = {
    getProducts: getProducts,
    loadProducts: loadProducts,
    updateCartProduct: updateCartProduct,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    showHideComponents: showHideComponents,
    test: test
};