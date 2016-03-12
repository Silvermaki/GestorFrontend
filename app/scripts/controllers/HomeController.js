angular.module('AngularScaffold.Controllers')
  .controller('HomeController', ['$http','$scope', '$localStorage', 'RoleService','$timeout',function ($http,$scope, $localStorage,RoleService,$timeout) {
    
    $scope.temp = {};
    $scope.surveys = [];

    $http.get('https://project-backend.herokuapp.com/v1/roles').success(function(data) {
        var roles = [];
        for(i = 0; i<data.length; i++){
          roles.push(data[i].name);
        }
          RoleService.setRoles(roles);
      });

    $scope.$on("filterSurveys",function(){
        console.log($localStorage.currentUser.scope);
        for(i=0;i<$scope.surveys.length; i++){
        permit = false;
        for(j=0;j<$localStorage.currentUser.scope.length; j++){
          if($scope.surveys[i].tipo == $localStorage.currentUser.scope[j]){
            permit = true;
          }
        }
        console.log($scope.surveys[i].tipo+" "+permit);
        if(permit == false){
          $scope.surveys.splice(i,1);
        }
      }
      console.log($scope.surveys);
     $scope.$$phase || $scope.$apply();
      
      });
      
  // update goes here

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
       
  //
      $scope.select = function(tipo,nombre){
        console.log(tipo);
        console.log(nombre);
        RoleService.setCurrentRole(tipo);
        RoleService.setCurrentNombre(nombre);
      }

      $scope.isAdmin = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('admin') > -1;
      }
      $scope.isRegular = function(){
        return $localStorage.currentUser && $localStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
