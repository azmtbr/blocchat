(function() {
  function homeController($scope, Rooms) {
    $scope.rooms = Rooms.all;
    $scope.room = null;
    $scope.name = null;

    $scope.addRoom = function() {
      Rooms.all.$add({
        room: $scope.room,
        name: $scope.name,
      });
      $scope.room = null;
    };
  }


  angular
		.module('blocChat')
		.controller('homeController', ['$scope', 'Rooms', homeController]);
})();
