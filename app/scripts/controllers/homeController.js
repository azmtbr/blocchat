(function() {
  function homeController($scope, Rooms, Message, $uibModal, $cookies) {
    $scope.rooms = Rooms.all;
    $scope.animationsEnabled = true;
    $scope.roomName = "Please choose a chat room to begin chatting.";


    $scope.open = function (size) {
      if (!$cookies.get('currentUser')){
        $uibModal.open({
          templateUrl: '/templates/usernameModal.html',
          controller: 'userModalController'
        })
      } else {
        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: '/templates/createRoomModal.html',
          controller: 'roomModalController',
          size: size
        });
      }
    }

    $scope.openRoom = function (roomId) {
      $scope.currentRoomId = roomId;
      if (!$cookies.get('currentUser')){
        $uibModal.open({
          templateUrl: '/templates/usernameModal.html',
          controller: 'userModalController'
        })
      } else {
      $scope.messages = Rooms.getMessages(roomId);
      Rooms.getName(roomId).then(function(name){
        $scope.roomName = name;
      });
      }
    };

    $scope.sendMessage = function () {
      Message.send($scope.currentRoomId, $scope.newMessage);
      $scope.newMessage = "";
    };
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', 'Rooms', 'Message', '$uibModal', '$cookies', homeController]);
})();
