angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$scope', '$localStorage', function ($scope, $localStorage) {


      $scope.isAdmin = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
