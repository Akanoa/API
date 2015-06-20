'use strict';

/**
 * @ngdoc function
 * @name apiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apiApp
 */
angular.module('apiApp')
  .controller('RightsCtrl', function ($scope, ModalService) {
	
    $scope.models = {
        selected: null,
        paths: [{path: "/test", verb:"get"}],
		scopes : {"admin" : []}
    };

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
	
	$scope.addPathModal = function() {
		ModalService.showModal({
			templateUrl: "views/addPath.html",
			controller: "ModalAddPathCtrl"
		}).then(function(modal) {
			//it's a bootstrap element, use 'modal' to show it
			modal.element.modal();
			modal.close.then(function(result) {
				if(result){
					$scope.models.paths.push(result);
				}
			});
		});
	};

	
	$scope.addList = function() {
		ModalService.showModal({
			templateUrl: "views/addScopeInRights.html",
			controller: "ModalAddScopeInRightsCtrl"
		}).then(function(modal) {
			//it's a bootstrap element, use 'modal' to show it
			modal.element.modal();
			modal.close.then(function(result) {
				if(result){
					$scope.models.scopes[result] = [];
				}
			});
		});
	};
	
	
	$scope.deleteList = function(list){
		delete $scope.models.scopes[list.listName];
	};
});