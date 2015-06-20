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
        lists: {"A": [], "B": [], "C":[]}
    };

    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
        $scope.models.lists.A.push({label: "Item A" + i});
        $scope.models.lists.B.push({label: "Item B" + i});
		$scope.models.lists.C.push({label: "Item C" + i});
    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
	
	$scope.test = function() {
		ModalService.showModal({
			templateUrl: "views/addPath.html",
			controller: "ModalCtrl"
		}).then(function(modal) {
			//it's a bootstrap element, use 'modal' to show it
			modal.element.modal();
			modal.close.then(function(result) {
				if(result){
					$scope.models.lists.A.push({label: angular.uppercase(result.verb) +" "+result.path});
				}
			});
		});
	};
});