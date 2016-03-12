angular.module('AngularScaffold.Controllers')
  .controller('deleteSurveyController', ['$scope', '$http','$location','RoleService' ,function ($scope,$http,$location,RoleService) {
    $scope.roles = RoleService.getRoles();
    $scope.currentRol = "";

	$scope.prueba = function(){
		console.log($scope.roles);
	}

	$scope.borrarEncuesta = function(){
		var tipo = {rol: $scope.currentRol};
		console.log(tipo);
		$http.post('https://project-backend.herokuapp.com/v1/deleteSurveyModel',tipo).success(function(){
          $scope.currentRol = "";
          window.location.href = '#/home'
        });
	}
  }]);
	