angular.module('WebStore').factory('ProductsService', [function () {

	function getProducts() {
		return [
			{
				id: 1,
				name: "Shoes",
				price: 70
			},
			{
				id: 2,
				name: "Hat",
				price: 32
			},
			{
				id: 3,
				name: "Umbrella",
				price: 28
			},
			{
				id: 4,
				name: "Gloves",
				price: 45
			},
			{
				id: 5,
				name: "Scarf",
				price: 25
			}
		];
	};

	return {
		getProducts: getProducts
	};

}]);