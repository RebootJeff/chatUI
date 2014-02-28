angular.module('chatUIApp')
  .controller('ChatCtrl', function($scope, FakeMsgData) {
    'use strict';

    $scope.sendMsg = function(){
      var currentMoment = moment();
      var newMsg = {
        author: {
          username: 'demo user',
          avatar: 'default-avatar.jpg'
        },
        date: currentMoment.format('l'), // Format will be: m/d/yyyy
        time: currentMoment.format('H:mm'), // Format will be military time
        text: $scope.newMsgText
      };

      FakeMsgData.addMsg(newMsg);
    };

    setTimeout(FakeMsgData.getData, 1000);
  });
