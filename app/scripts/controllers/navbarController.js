angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService','$location','$scope', '$rootScope', '$sessionStorage',  function (authService,$location, $scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.wronglogin=false;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          $sessionStorage.$reset();
          $location.path('#/home');
        }).catch(function(err){

        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
        }).catch(function(err){
          $scope.wronglogin=true;
        });
      }
  }]);
