angular.module('AngularScaffold.Controllers')
  .controller('SurveyController', ['SurveysService','$log','$location' ,'$scope', '$rootScope', '$localStorage','RoleService', '$http' ,function (SurveysService, $log, $location ,$scope, $rootScope, $localStorage, RoleService,$http) {
      $scope.surveys = [];
      $scope.currentSurvey = {};
      $scope.temp = [];
      $scope.respuestas = [];
      $scope.survey = {};
      
      $http.get('https://project-backend.herokuapp.com/v1/surveyModels').success(function(data) {
        $scope.surveys = data;
        //console.log($scope.surveys);
        //console.log(RoleService.getCurrentRole());
         $scope.temp = $scope.surveys.filter(function( obj ) {
            //console.log(obj.tipo);
            return obj.nombre == RoleService.getCurrentNombre();
          });
         $scope.currentSurvey = $scope.temp[0];
      });

     

      
      $scope.getSurveys = function(){
        SurveysService.GetSurveys().then(function(response){
          $scope.surveys = response.data;
        }).catch(function(err){

        });
      }


      $scope.ingresarEncuesta = function(type){
        $scope.survey.usuario=$localStorage.currentUser.username;
        $scope.survey.nombre = RoleService.getCurrentNombre();
        $scope.survey.tipo = RoleService.getCurrentRole();
        $scope.survey.respuestas = $scope.respuestas;
        console.log($scope.survey);
        $http.post('https://project-backend.herokuapp.com/v1/survey',$scope.survey).success(function(data) {
          console.log("success");
          window.location.href = '#/home'
        });
      }

      $scope.prueba = function(data){
        console.log($scope.respuestas);
      }



  }]);
