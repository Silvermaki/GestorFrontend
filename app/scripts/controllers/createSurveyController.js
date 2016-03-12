angular.module('AngularScaffold.Controllers')
  .controller('createSurveyController', ['$scope', '$http','$location','RoleService' ,function ($scope,$http,$location,RoleService) {
    $scope.opciones= "";
    $scope.consulta = "";    
	$scope.preguntas = [];
	$scope.roles = RoleService.getRoles();
	$scope.currentRol = "";

	$scope.agregarPregunta = function(){
		var respuestas = $scope.opciones.split(",");
		$scope.preguntas.push({
			consulta: $scope.consulta,
			opciones: respuestas
		});
		$scope.consulta = "";
		$scope.opciones = "";
	}

	$scope.crearEncuesta = function(){
		var encuesta = {tipo: $scope.currentRol, preguntas: $scope.preguntas};
		$http.post('https://project-backend.herokuapp.com/v1/surveyModel',encuesta).success(function (){
        	console.log("success");
        	window.location.href = '#/home'
        });
	}
	$scope.prueba = function(){
		console.log($scope.currentRol);
	}
  }]);
	
