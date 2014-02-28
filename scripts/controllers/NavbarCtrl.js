angular.module('chatUIApp')
  .controller('NavbarCtrl', function ($scope, $location) {
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
      // 2. Redirect user to a Home view or a Login view
    };

    // This function helps apply the `active` class to menu item
    // so then CSS will apply style for active view's menu item.
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
