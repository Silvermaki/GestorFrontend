var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
				.state('contact', {
            url: '/contact',
            templateUrl: '/views/contact.html',
            controller: 'ContactController'
        })
				.state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: 'AboutController'
        });
}])
