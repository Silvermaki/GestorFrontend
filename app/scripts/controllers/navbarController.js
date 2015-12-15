angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService','$location','$scope', '$rootScope', '$localStorage',  function (authService,$location, $scope, $rootScope, $localStorage) {
      $scope.user = {};
      $scope.$localStorage = $localStorage;
      $scope.wronglogin=false;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          $localStorage.$reset();
          $location.path('#/home');
        }).catch(function(err){

        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $localStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          $scope.wronglogin=true;
        });
      }
  }]);
