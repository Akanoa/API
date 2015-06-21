'use strict';

angular.module('apiApp')
  .controller('ModalAddPathCtrl', ['$scope', 'close', function($scope, close) {
	
	$scope.verbs = ['get', 'post', 'put', 'delete'];
	
	$scope.path = null;
	$scope.verb = null;
	
  	$scope.close = function(result) {
		if (result){
			result = {
			  verb : $scope.verb,
			  path : $scope.path
			};
		 }
 		 close(result, 500);
  	};

}]);

angular.module('apiApp')
  .controller('ModalAddScopeInRightsCtrl', ['$scope', 'close', function($scope, close) {
	
  	$scope.close = function(result) {
		if(result){
			result = $scope.scope;
		}
 		 close(result, 500);
  	};

}]);