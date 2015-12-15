angular.module('AngularScaffold.Controllers')
  .controller('SurveyController', ['SurveysService','$log','$location' ,'$scope', '$rootScope', '$localStorage',  function (SurveysService, $log, $location ,$scope, $rootScope, $localStorage) {
      $scope.survey = {};
      $scope.surveys = [];
      $scope.tv = false;
      $scope.radio = false;
      $scope.news = false;
      $scope.social = false;
      $scope.movie = false;

      $scope.isTv = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('Televisión') > -1;
      }
      $scope.isRadio = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('Radio') > -1;
      }
      $scope.isNews = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('Periódico') > -1;
      }
      $scope.isSocial = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('Sociales') > -1;
      }
      $scope.isMovie = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('Cine') > -1;
      }

      $scope.goHome=function(){
        $location.path('home');
      }

      $scope.setTv = function(){
        $scope.tv = true;
        $scope.radio = false;
        $scope.news = false;
        $scope.social = false;
        $scope.movie = false;
      }
      $scope.setRadio = function(){
        $scope.tv = false;
        $scope.radio = true;
        $scope.news = false;
        $scope.social = false;
        $scope.movie = false;
      }
      $scope.setNews = function(){
        $scope.tv = false;
        $scope.radio = false;
        $scope.news = true;
        $scope.social = false;
        $scope.movie = false;
      }
      $scope.setSocial = function(){
        $scope.tv = false;
        $scope.radio = false;
        $scope.news = false;
        $scope.social = true;
        $scope.movie = false;
      }
      $scope.setMovie = function(){
        $scope.tv = false;
        $scope.radio = false;
        $scope.news = false;
        $scope.social = false;
        $scope.movie = true;
      }
      $scope.setVisibility = function(){
        if($scope.survey.pregunta1 == "Sí"){
          return true;
        }else{
          return false;
        }
      }

      $scope.setVisibility2 = function(){
        if($scope.survey.pregunta1 == "Sí"){
          return true;
        }else if($scope.survey.pregunta1 == "No"){
          return true;
        }else {
          return false;
        }
      }

      $scope.getSurveys = function(){
        SurveysService.GetSurveys().then(function(response){
          $scope.surveys = response.data;
        }).catch(function(err){

        });
      }

      $scope.postSurvey = function(type){
        $scope.survey.usuario=$localStorage.currentUser.username;
        $scope.survey.tipo = type;
        SurveysService.CreateSurvey($scope.survey).then(function(response){
          $scope.getSurveys();
          $location.path('home');
        }).catch(function(err){

        });
      }

  }]);
