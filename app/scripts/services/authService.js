angular.module('AngularScaffold.Services').factory('AuthService', ['$http', '$log',
	function($http, $log){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://project-backend.herokuapp.com/';
		return {
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
        },
				UpdateUser: function(payload){
          return $http.put(baseUrl + "v1/user/update", payload);
        },
				GetUsers: function(payload){
          return $http.get(baseUrl + "v1/users", payload);
        }
	    };
}]);
