angular.module('AngularScaffold.Controllers')
  .controller('deleteSurveyController', ['$scope', '$http','$location','RoleService' ,function ($scope,$http,$location,RoleService) {
    $scope.surveys = RoleService.getSurveys();
    $scope.currentSurvey = "";

	$scope.prueba = function(){
		console.log(RoleService.getSurveys());
	}

	$scope.borrarEncuesta = function(){
		var nombre = {nombre: $scope.currentSurvey.nombre};
		//console.log(nombre);
		$http.post('https://project-backend.herokuapp.com/v1/deleteSurveyModel',nombre).success(function(){
          $scope.currentRol = "";
          window.location.href = '#/home'
        });
	}
	$http.get('https://project-backend.herokuapp.com/v1/surveyModels').success(function(data) {
        $scope.temp = data;
        RoleService.setSurveys(data);
        //console.log(RoleService.getSurveys());
        /*$scope.surveys = $scope.temp.filter(function( obj ) {
            console.log($localStorage.user);
            return obj.tipo == "Radio";
          });*/
        $scope.surveys = data;
        //console.log($scope.surveys);
        

        });
  }]);
	