angular.module('jingleGridApp')
  .controller('NavbarCtrl', function ($scope, $location, UserAuthService) {
    'use strict';

    $scope.menuItems = [
      {
        'name': 'Home',
        'href': ''
      },
      {
        'name': 'Settings',
        'href': ''
      }
    ];

    $scope.logout = function() {
      // 1. Use UserAuthService to logout the user
      // 2. 
    };

    // This function helps apply the `active` class to menu item
    // so then CSS will apply style for active view's menu item.
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
