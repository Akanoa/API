'use strict';

/**
 * @ngdoc overview
 * @name apiApp
 * @description
 * # apiApp
 *
 * Main module of the application.
 */
angular
  .module('apiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'dndLists',
	'angularModalService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/rights', {
        templateUrl: 'views/rights.html',
        controller: 'RightsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
