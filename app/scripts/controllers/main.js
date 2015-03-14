'use strict';

/**
 * @ngdoc function
 * @name enterpriseClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the enterpriseClientApp
 */
angular.module('enterpriseClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
