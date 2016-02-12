(function() {
  function Message(Rooms, $firebaseArray, $cookies) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/' + roomId);
    var messages = $firebaseArray(firebaseRef.child('messages'));


    return {
      send: function(newMessage) {
          return messages.$add({
            username: $cookies.get('currentUser'),
            sent_at: Firebase.ServerValue.TIMESTAMP,
            content: newMessage
          });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['Rooms', '$firebaseArray', '$cookies', Message]);
})();
