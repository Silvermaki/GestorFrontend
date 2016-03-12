var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers',[]);

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
        })
				.state('register', {
            url: '/register',
            templateUrl: '/views/register.html',
            controller: 'RegisterController'
        })
				.state('user', {
            url: '/user',
            templateUrl: '/views/user.html',
            controller: 'RegisterController'
        })
				.state('tables', {
            url: '/tables',
            templateUrl: '/views/tables.html',
            controller: 'TablesController'
        })
				.state('graphs', {
            url: '/graphs',
            templateUrl: '/views/graphs.html',
            controller: 'GraphsController'
        })
				.state('excel', {
            url: '/excel',
            templateUrl: '/views/excel.html',
            controller: 'ExcelController'
        })
				.state('createuser', {
            url: '/createuser',
            templateUrl: '/views/createuser.html',
            controller: 'RegisterController'
        })
				.state('tv', {
            url: '/tv',
            templateUrl: '/views/surveytv.html',
            controller: 'SurveyController'
        })
				.state('radio', {
            url: '/radio',
            templateUrl: '/views/surveyradio.html',
            controller: 'SurveyController'
        })
				.state('news', {
            url: '/news',
            templateUrl: '/views/surveynews.html',
            controller: 'SurveyController'
        })
				.state('movie', {
            url: '/movie',
            templateUrl: '/views/surveymovie.html',
            controller: 'SurveyController'
        })
				.state('social', {
            url: '/social',
            templateUrl: '/views/surveysocial.html',
            controller: 'SurveyController'
        })
                .state('survey', {
            url: '/survey',
            templateUrl: '/views/survey.html',
            controller: 'SurveyController'
        })
                .state('createSurvey', {
            url: '/createSurvey',
            templateUrl: '/views/createSurvey.html',
            controller: 'createSurveyController'
        })
                        .state('deleteSurvey', {
            url: '/deleteSurvey',
            templateUrl: '/views/deleteSurvey.html',
            controller: 'deleteSurveyController'
        })
                .state('createRole', {
            url: '/createRole',
            templateUrl: '/views/createRole.html',
            controller: 'RoleController'
        });
}])
