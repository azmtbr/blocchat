(function() {
  function Rooms($firebaseArray) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
    }
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();
