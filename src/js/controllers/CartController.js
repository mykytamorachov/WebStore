angular.module('WebStore')
.controller('CartController', ['$scope', 'CartService', 
	function ($scope, CartService) {
	$scope.products = CartService.getProducts();
	$scope.total = CartService.getTotal;
	$scope.removeProduct = CartService.removeProduct;
}]);