angular.module('AngularScaffold.Services').factory('SurveysService', ['$http', '$log',
	function($http, $log){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://project-backend.herokuapp.com/';
		return {
				CreateSurvey: function(payload){
          return $http.post(baseUrl + "v1/survey", payload);
        },
				GetSurveys: function(){
          return $http.get(baseUrl + "v1/surveys");
        }
	    };
}]);
