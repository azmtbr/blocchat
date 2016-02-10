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
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', 'Rooms', '$uibModal', homeController]);
})();
