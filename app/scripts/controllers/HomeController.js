angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$http','$scope', '$localStorage', 'RoleService',function ($http,$scope, $localStorage,RoleService) {
    $scope.surveys = [];

    $http.get('https://project-backend.herokuapp.com/v1/roles').success(function(data) {
        var roles = [];
        for(i = 0; i<data.length; i++){
          roles.push(data[i].name);
        }
          RoleService.setRoles(roles);
      });
    $http.get('https://project-backend.herokuapp.com/v1/surveyModels').success(function(data) {
        $scope.surveys = data;
      });
      $scope.select = function(tipo){
        RoleService.setCurrentRole(tipo);
      }

      $scope.isAdmin = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('admin') > -1;
      }
      $scope.isRegular = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
