angular.module('WebStore')
.controller('CustomerInfoController', ['$scope', '$state', 'CustomerService', 
	function ($scope, $state, CustomerService) {

		function validateEmail(email) {
		    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		    return re.test(email);
		};
		$scope.submit = function () {
			if (typeof $scope.name !== 'undefined' && typeof $scope.email !== 'undefined' && validateEmail($scope.email)) {
				CustomerService.setCustomer({name: $scope.name, email: $scope.email});
				$state.go('confirmation');
			}
			else
			{
				Materialize.toast('Please provide correct data!', 4000)
			}

		};
}])