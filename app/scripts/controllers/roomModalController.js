(function() {
  function roomModalController($scope, $uibModalInstance, Rooms) {
    $scope.rooms = Rooms.rooms;
    $scope.newRoom = "";

    $scope.createRoom = function() {
      if ($scope.newRoom.trim() !== "") {
        $uibModalInstance.close($scope.room);
        Rooms.create($scope.newRoom);
      }
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
		.module('blocChat')
		.controller('roomModalController', ['$scope', '$uibModalInstance', 'Rooms', roomModalController]);
})();
