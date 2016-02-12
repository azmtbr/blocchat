(function() {
  function roomModalController($scope, $uibModalInstance, Rooms) {
    $scope.rooms = Rooms.rooms;

    $scope.createRoom = function() {
      $uibModalInstance.close($scope.room);
      Rooms.create($scope.newRoom);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
		.module('blocChat')
		.controller('roomModalController', ['$scope', '$uibModalInstance', 'Rooms', roomModalController]);
})();
