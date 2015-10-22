angular.module('WebStore')
.controller('ConfirmationController', ['$scope', 'CartService', 'CustomerService',
 function ($scope, CartService, CustomerService) {

	$scope.products = CartService.getProducts();
	$scope.customer = CustomerService.getCustomer();
	$scope.total = CartService.getTotal;
}])