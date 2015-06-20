angular.module('apiApp')
  .controller('ModalAddPathCtrl', function($scope, close) {
	
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

angular.module('apiApp')
  .controller('ModalAddScopeInRightsCtrl', function($scope, close) {
	
	$scope.verbs = ["get", "post", "put", "delete"];
	
  	$scope.close = function(result) {
		if(result){
			result = $scope.scope;
		}
 		 close(result, 500);
  	};

});