(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var user = $cookies.get('currentUser');
    if (!user || user === '') {
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
