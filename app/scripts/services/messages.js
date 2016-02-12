(function() {
  function Message($firebaseArray, $cookies) {
    var firebaseRef = new Firebase('https://blocchat-1105.firebaseio.com/rooms/rooms/-KAG7sc7LaZmbU66IsNq');
    var messages = $firebaseArray(firebaseRef.child('messages'));


    return {
      send: function(newMessage, roomId) {
          return messages.$add({
            username: $cookies.get('username'),
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
