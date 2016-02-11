(function() {
  function Rooms($firebaseArray) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      getMessages: function(roomId) {

        var array = $firebaseArray(new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/' + roomId + '/messages'));
        //array.$add({username:'hello'});
        return array;
      },
      create: function(room) {
        return rooms.$add({name:room});
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();
