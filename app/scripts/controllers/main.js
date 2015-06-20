'use strict';

/**
 * @ngdoc function
 * @name apiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the apiApp
 */
angular.module('apiApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
