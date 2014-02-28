angular.module('chatUIApp')
  .factory('FakeMsgData', function() {
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

    return {
      getData: function(){
        return data;
      },

      addMsg: function(msg){
        data.push(msg);
      }
    };
  });
