(function() {
  function Rooms($firebaseArray, $q) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      getMessages: function(roomId) {
        var array = $firebaseArray(new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/' + roomId + '/messages'));
        return array;
      },
      create: function(room) {
          return rooms.$add({
            name:room
          });
      },
      getName: function(roomId) {
        var promise = $q.defer();
        new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/' + roomId).on('value', function(roomWrapper){
          var room = roomWrapper.val();
          promise.resolve(room.name);
        });
        return promise.promise;
      }
    }
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', '$q',   Rooms]);
})();
