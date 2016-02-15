(function() {
  function homeController($scope, $cookies, Rooms, Message, $uibModal) {

    $scope.userExists = false;
    $scope.rooms = Rooms.all;
    $scope.animationsEnabled = true;

    $scope.makeUserExist = function () {
      $scope.userExists = true;
    };

    $scope.$on('currentUserExists', $scope.makeUserExist);

    $scope.open = function (size) {
      if (!$scope.userExists) {
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
      if (!$scope.userExists) {
        $uibModal.open({
          templateUrl: '/templates/usernameModal.html',
          controller: 'userModalController'
        })
      } else {
        $scope.messages = Rooms.getMessages(roomId);
        $scope.currentRoom = Rooms.getCurrentRoom(roomId);
      }
    };

    $scope.sendMessage = function () {

      Message.send($scope.newMessage);
      $scope.newMessage = "";
    };
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', '$cookies', 'Rooms', 'Message', '$uibModal', homeController]);
})();
