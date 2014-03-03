angular.module('chatUIApp')
  .controller('ChatCtrl', function($scope, $interval, FakeMsgData) {
    'use strict';

    $scope.sendMsg = function(){
      var timestamp = Date.now();
      var currentMoment = moment(timestamp);
      var newMsg = {
        author: {
          username: 'batman',
          avatar: 'images/avatar-batman.png'
        },
        timestamp: timestamp,
        date: currentMoment.format('l'), // Format will be: m/d/yyyy
        time: currentMoment.format('H:mm'), // Format will be military time
        text: $scope.newMsgText
      };

      FakeMsgData.addMsg(newMsg);
    };

    var refreshData = function(){
      $scope.msgs = FakeMsgData.getData();
      // scan messages for dates equal to today and switch their times to use
      // moment.js `fromNow()` formatting

      // TODO: group together consecutive msgs from a user (a la Facebook chat)

    };

    // Start off with immediate refresh
    refreshData();
    // TODO: use sockets instead of polling via $interval?
    $interval(refreshData, 2000);
  });
