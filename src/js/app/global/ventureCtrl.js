/*
ventureApp.controller('ventureController', function($scope, $sanitize, $state, Authenticate) {
	
	$scope.login = {};
	
	$scope.loginPost = function() {
		Authenticate.login({
			'email': 	$sanitize($scope.login.email),
			'password':	$sanitize($scope.login.password)
		}, function() {
			$scope.flash = '';//WHY IS THIS NEEDED?
			$state.transitionTo('admin');
			//$location.path('/admin');//Needs to be changed with state
		}, function(response) {
			$scope.flash = response.data.flash
		});
	}
	
	Authenticate.check();
});
*/

/*
var ventureCtrl = function($scope) {
	
}

ventureCtrl.$inject		= ['$scope'];
*/