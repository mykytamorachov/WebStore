angular.module('WebStore').factory('CartService', [function () {
  var products = [];

  function getProducts() {
    return products;
  };
  function addProduct (id, name, price, quantity) {
    Materialize.toast('Product added!', 4000)
    return products.push({
      id: id,
      name: name,
      price: price,
      quantity: quantity
    })
  };

  function getTotal () {
    var total = 0;
    if (products.length > 0) {
      angular.forEach(products, function (value) {
        var price = parseInt(value.price, 10);
        var quantity = parseInt(value.quantity, 10);
        total += price*quantity;
      })
    }
    return total;
  };

  function removeProduct (id) {
    if(products.length < 2) {
      products.length = 0;
    } 
    else {
      angular.forEach(products, function (value, key) {
        if(value.id === id){
          products.splice(key, 1);
        }
      });
    }
  }

  return {
    getProducts: getProducts,
    addProduct: addProduct,
    getTotal: getTotal,
    removeProduct:removeProduct
  };

}]);