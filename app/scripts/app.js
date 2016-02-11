(function () {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
		});

		$stateProvider
			.state('home', {
				url: '/',
				controller: 'homeController as home',
				templateUrl: '/templates/home.html'
			})
			// .state('modal', {
			// 	'abstract': true,
			// 	url: '',
			// 	controller: 'modalController as modal',
			// 	views: {
			// 		'modal': {template: 'createRoomModal.html' }
			// 	}
			// })
			;
	}


	angular
		.module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
		.config(config);
})();
