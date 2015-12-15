angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', '$localStorage', function ($scope, $localStorage) {


      $scope.isAdmin = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('admin') > -1;
      }
      $scope.isRegular = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('regular') > -1;
      }
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

  }]);
