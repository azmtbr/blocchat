(function() {
  function homeController($scope, Rooms, Message, $uibModal, $cookies) {

    $scope.userExists = false;
    $scope.rooms = Rooms.all;
    $scope.animationsEnabled = true;

    $scope.makeUserExist = function () {
      $scope.userExists = true;
    };

    $scope.$on('currentUserExists', $scope.makeUserExist);

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
      if (!$cookies.get('currentUser')){
        $uibModal.open({
          templateUrl: '/templates/usernameModal.html',
          controller: 'userModalController'
        })
      } else {
      $scope.messages = Rooms.getMessages(roomId);
      }
    };

    $scope.sendMessage = function () {
      Message.send($scope.newMessage);
      $scope.newMessage = "";
    };
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', 'Rooms', 'Message', '$uibModal', '$cookies', homeController]);
})();
