angular.module('WebStore').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // set up the states
  $stateProvider
    .state('main', {
      url: "/",
      controller:"MainController",
      templateUrl: "src/js/views/main.html"
    })
    .state('cart', {
      url: "/cart",
      controller:"CartController",
      templateUrl: "src/js/views/cart.html"
    })
    .state('customer_info', {
      url: "/customer_info",
      controller:"CustomerInfoController",
      templateUrl: "src/js/views/customer-information.html"
    })
    .state('confirmation', {
      url: "/confirmation",
      controller:"ConfirmationController",
      templateUrl: "src/js/views/confirmation.html"
    })
});