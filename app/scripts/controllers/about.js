'use strict';

/**
 * @ngdoc function
 * @name enterpriseClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the enterpriseClientApp
 */
angular.module('enterpriseClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
