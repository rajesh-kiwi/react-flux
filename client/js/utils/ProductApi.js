var $ = require("jquery");

var getProducts = function(callback) {
    // ajax req.
    
    var products = [
        {id:"1", name: "Men Polo t shirt", price:2499},
        {id:"2", name: "Arrow t shirt", price:1599},
        {id:"3", name: "Lee jeans", price:1499},
        {id:"4", name: "UCB tshirt", price:1999},
        {id:"5", name: "Polo t-shirt", price:1599},
        {id:"6", name: "samsung g15", price:1299},
        {id:"7", name: "Nokia 3310", price:999},
        {id:"8", name: "Belts", price:1000},
        {id:"9", name: "Pull over", price:1999},
        {id:"11", name: "Puma  shoe", price:1500},
        {id:"12", name: "Adidas tshirt", price:1999},
        {id:"13", name: "Polo t short", price:999},
        {id:"14", name: "Nike shoes", price:2999},
        {id:"15", name: "Nike cap", price:1999},
        {id:"16", name: "Jacket Brown", price:4999},
        {id:"17", name: "Leee cooper", price:3199},
    ];
    
    callback(products);
}

module.exports = {
    getProducts: getProducts
}