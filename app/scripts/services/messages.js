(function() {
  function Message($firebaseArray, $cookies) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms/');
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
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
