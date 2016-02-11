(function() {
  function homeController($scope, Rooms, $uibModal) {

    $scope.rooms = Rooms.all;
    $scope.animationsEnabled = true;

    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/templates/createRoomModal.html',
        controller: 'modalController',
        size: size
      });
    }

    $scope.openRoom = function (roomId) {
      $scope.messages = Rooms.getMessages(roomId);
    };
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', 'Rooms', '$uibModal', homeController]);
})();
