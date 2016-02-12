(function() {
  function userModalController($scope, $rootScope, $cookies, $uibModalInstance) {
    $scope.addNewUser = function () {
      if ($scope.blocChatCurrentUser == null) {
        $scope.invalid = "Please enter a valid username";
      } else {
        $cookies.put('currentUser', $scope.blocChatCurrentUser);
        $rootScope.$broadcast('currentUserExists');
        $uibModalInstance.close();
        console.log($cookies.get('currentUser'));
      }
    }
  };


  angular
		.module('blocChat')
		.controller('userModalController', ['$scope', '$rootScope', '$cookies', '$uibModalInstance', userModalController]);
})();
