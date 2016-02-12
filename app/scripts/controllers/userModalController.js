(function() {
  function userModalController($scope, $cookies, $uibModalInstance) {
    $scope.addNewUser = function () {
      if ($scope.blocChatCurrentUser == null) {
        $scope.invalid = "Please enter a valid username";
      } else {
        $cookies.put('currentUser', $scope.blocChatCurrentUser);
        $scope.$emit('currentUserExists');
        $scope.$broadcast('currentUserExists');
        $uibModalInstance.close();
        console.log($cookies.get('currentUser'));
      }
    }
  };


  angular
		.module('blocChat')
		.controller('userModalController', ['$scope', '$cookies', '$uibModalInstance', userModalController]);
})();
