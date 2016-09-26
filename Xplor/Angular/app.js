angular.module('xplorHome', ['ui.bootstrap', 'toastr', 'ngRoute'])
.config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./index.html",
          controller: "MainCtrl"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ])
.controller('MainCtrl', function($scope, $http, $uibModal, toastr) {
    
	$scope.contactUs = function() {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'contact_form.html',
			controller: 'ContactUsCtrl',
			size: 'lg'
		});

		modalInstance.result.then(function () {
	      toastr.success("Thank you for reaching out. We'll get back shortly");
	    }, function () {
	      console.info('Modal dismissed at: ' + new Date());
	    });
	};    
})
.controller('ContactUsCtrl', function($scope, $uibModalInstance, $http, toastr, $timeout) {
	
	$scope.submitComments = function() {
	}
})
.controller('ChooseHoneymoonCtrl', function($scope, $http, toastr) {
    
    $scope.budgets = 
    [ 
        {item: 'Less than ₹ 10,000'}, 
        {item: '₹ 10,000 to ₹ 20,000'}, 
        {item: '₹ 20,000 to ₹ 30,000'}, 
        {item: '₹ 30,000 to ₹ 40,000'}, 
        {item: 'More than ₹ 40,000'}, 
    ];

    $scope.durations = 
    [ 
        {item: 'Less than 3'}, 
        {item: '3 to 7'}, 
        {item: 'More than 7'} 
    ];

   $scope.months = 
    [ 
        {item: 'January'}, 
        {item: 'February'}, 
        {item: 'March'}, 
        {item: 'April'}, 
        {item: 'May'}, 
        {item: 'June'}, 
        {item: 'July'}, 
        {item: 'August'}, 
        {item: 'September'}, 
        {item: 'October'}, 
        {item: 'November'}, 
        {item: 'December'} 
    ];

    $scope.isInternational = false;


    $scope.chooseHPackages = function() {
        alert("it works!");    
    }
    
    
});

