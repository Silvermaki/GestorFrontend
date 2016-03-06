angular.module('AngularScaffold.Controllers')
  .controller('RoleController', ['$scope', '$http','$location' ,function ($scope, $http,$location) {
      $scope.role = {};

	$scope.create = function(){
        var role = {name: $scope.role.name};
        //console.log(role);
        $http.post('https://project-backend.herokuapp.com/v1/role',role).success(function (){
        	console.log("success");
        	window.location.href = '#/user'
        });

      }

     
  }]);
