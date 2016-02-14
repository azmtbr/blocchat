(function() {
  function Message($firebaseArray, $cookies) {
    return {
      send: function(roomId, newMessage) {
        var messages = $firebaseArray(new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/' + roomId + '/messages'));
        return messages.$add({
          username: $cookies.get('currentUser'),
          sent_at: Firebase.ServerValue.TIMESTAMP,
          content: newMessage,
        });
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
