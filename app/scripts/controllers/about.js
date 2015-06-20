'use strict';

/**
 * @ngdoc function
 * @name apiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the apiApp
 */
angular.module('apiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
