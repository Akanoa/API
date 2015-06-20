angular.module('apiApp')
  .controller('ModalCtrl', function($scope, close) {
	
	$scope.verbs = ["get", "post", "put", "delete"];
	
	$scope.path = null;
	$scope.verb = null;
	
  	$scope.close = function(result) {
		if (result){
			result = {
			  verb : $scope.verb,
			  path : $scope.path
			}
		 }
 		 close(result, 500);
  	};

});