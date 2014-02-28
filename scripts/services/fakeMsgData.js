angular.module('chatUIApp')
  .service('FakeMsgData', function() {
    'use strict';
    var data = [
      {
        author: {
          username: '',
          avatar: ''
        },
        date: '',
        time: '',
        text: ''
      },
      {
        author: {
          username: '',
          avatar: ''
        },
        date: '',
        time: '',
        text: ''
      }
    ];

    this.getData = function(){
      return data;
    };

    this.addMsg = function(msg){
      data.push(msg);
    };
  });
