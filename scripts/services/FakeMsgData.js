angular.module('chatUIApp')
  .service('FakeMsgData', function() {
    'use strict';

    var data = [
      {
        author: {
          username: 'superman',
          avatar: 'images/avatar-superman.png'
        },
        timestamp: '',
        date: '2/27/14',
        time: '10:00',
        text: 'Hi'
      },
      {
        author: {
          username: 'batman',
          avatar: 'images/avatar-batman.png'
        },
        timestamp: '',
        date: '2/27/14',
        time: '10:01',
        text: 'Hello'
      }
    ];

    this.getData = function(){
      return data;
    };

    this.addMsg = function(msg){
      data.push(msg);
    };
  });
