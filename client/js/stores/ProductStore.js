var AppDispatcher = require("../dispatcher/AppDispatcher");
var AppComponents = require("../constants/AppComponents");
var ProductConstants = require("../constants/ProductConstant");
var ProductApi = require("../utils/ProductApi");

var EventEmitter = require('events').EventEmitter;
var merge = require('merge');

var _products = [], selectedProducts = [];
var showProductComponent = true, showCartComponent = false;

function loadProducts(data){
    _products = data;
}

function addToCart(product){
    if(!selectedProducts.length){
        selectedProducts.push(product);
        return;
    }
    var exists = false;
    selectedProducts.forEach(function(prod){
        if(prod.id == product.id){
            exists = true;
            if(!prod.quantity){
                prod.quantity = 2;
            }else{
                prod.quantity += 1;
            }
        }
    });
    !exists ? selectedProducts.push(product) : '';
}

function removeFromCart(product){
    var products = selectedProducts.filter(function(prod){
        return prod.id != product.id;
    });
    selectedProducts = products;
}

function updateSelectedProducts(id, product){
    selectedProducts.forEach(function(prod){
        if(prod.id == id){
            prod = product;
        }
    });
}

function showOrHideComponent(component, show){
    switch(component){
        case AppComponents.PRODUCT:
            showProductComponent = show;
            break;
        case AppComponents.CART:
            showCartComponent = show
            break;
        default:
            return true;
    }
}

var ProductStore = merge(EventEmitter.prototype, {
    getProducts: function() {
        return _products;  
    },
    getCartProducts: function() {
        return selectedProducts;
    },
    showProductComponent: function() {
        return showProductComponent; 
    },
    showCartComponent: function() {
        return showCartComponent; 
    },
    emitChange: function(evt) {
        this.emit(evt);
    },
    addChangeListener: function(evt, callback) {
        this.on(evt, callback);
    },
    removeChangeListener: function(evt, callback) {
        this.removeListener(evt, callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType) {
        case ProductConstants.LOAD_PRODUCTS:
            loadProducts(action.data);
            break;
        case ProductConstants.ADD_TO_CART:
            addToCart(action.data);
            break;
        case ProductConstants.REMOVE_FROM_CART:
            removeFromCart(action.data);
            break;
        case ProductConstants.UPDATE_CART_PRODUCTS:
            updateSelectedProducts(action.id, action.product);
            break;
        case ProductConstants.SHOW_HIDE_COMPONENTS:
            showOrHideComponent(action.component, action.show);
            break;
        case ProductConstants.TEST:
            console.log('Testing ...');
            ProductStore.emitChange('test');
            break;
        default:
            return true;
    }
    ProductStore.emitChange('change');
    return true;
});

module.exports = ProductStore;