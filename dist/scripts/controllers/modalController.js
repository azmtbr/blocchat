(function() {
  function modalController($scope, $uibModalInstance, Rooms) {
    $scope.rooms = rooms;

    $scope.createRoom = function() {
      $uibModalInstance.close($scope.room);
      Room.create($scope.newRoom);
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }

  angular
		.module('blocChat')
		.controller('modalController', ['$scope', '$uibModalInstance', 'Rooms', modalController]);
})();
