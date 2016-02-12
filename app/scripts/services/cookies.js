(function() {
  function BlocChatCookies($cookies, $uibModal) {
    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/usernameModal.html',
        controller: 'userModalController'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
