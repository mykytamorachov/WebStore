angular.module('WebStore')
.controller('MainController', ['$scope', 'ProductsService', "CartService", 
	function ($scope, ProductsService, CartService) {
		$scope.products = ProductsService.getProducts();
		$scope.addProduct = CartService.addProduct;
		$scope.quantity = 1;
	
}])