(function() {
  function Rooms($firebaseArray) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      getMessages: function(roomId) {
        var array = $firebaseArray(new Firebase('https://blocchat-1105.firebaseio.com/rooms/' + roomId + '/messages'));
        return array;
      },
      create: function(room) {
          return rooms.$add({
            name:room,
          });
        },
      getCurrentRoom: function(roomId) {
        var array = $firebaseArray(new Firebase('https://blocchat-1105.firebaseio.com/rooms/' + roomId));
        return array;
      }
    }
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();
