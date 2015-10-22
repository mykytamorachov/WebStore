angular.module('WebStore').factory('CustomerService', [function () {
	var products = [];
	var customer = {};

	function getCustomer () {
		return customer;
	};

	function setCustomer (object) {
		return customer = object;
	};

	return {
		setCustomer: setCustomer,
		getCustomer: getCustomer
	};

}]);