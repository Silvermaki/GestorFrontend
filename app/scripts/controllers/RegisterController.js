angular.module('AngularScaffold.Controllers')
  .controller('RegisterController', ['AuthService','$log','$location' ,'$scope', '$rootScope', '$sessionStorage',  function (authService, $log, $location ,$scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.users = [];
      $scope.$sessionStorage = $sessionStorage;
      $scope.wrongpass=false;
      $scope.wrongpass2=false;
      $scope.updateTable=false;
      $scope.roles = ['Televisión', 'Radio', 'Sociales', 'Periódico', 'Cine'];
      $scope.selection = ['regular'];
      $scope.selecteduser = {};
      $scope.$log = $log;
      $scope.sortType = 'username'; // set the default sort type
      $scope.sortReverse  = false;

      $scope.changeReverse = function(){
        if($scope.sortReverse == false){
          $scope.sortReverse = true;
        }else {
          $scope.sortReverse = false;
        }
      }

      $scope.setSortUser = function(){
        $scope.sortType = 'username';
        $scope.changeReverse();
      }

      $scope.setSortRole = function(){
        $scope.sortType = 'scope';
        $scope.changeReverse();
      }

      $scope.toggleSelection = function toggleSelection(roleName) {
        var idx = $scope.selection.indexOf(roleName);
        if (idx > -1) {
          $scope.selection.splice(idx, 1);
        }
        else {
          $scope.selection.push(roleName);
        }
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['regular']};
        authService.Register(user).then(function(response){
          $scope.login({username: user.username, password: user.password});
          $location.path('home');
        }).catch(function(err){
          $scope.wrongpass=true;
        })
      }


      $scope.updateUser = function (currentuser) {
        $scope.selecteduser = currentuser;
        var userc = { _id: $scope.selecteduser._id, username: $scope.selecteduser.username, password:  $scope.selecteduser.password, scope: $scope.selection};
        authService.UpdateUser(userc).then(function(response){
        }).catch(function(err){
        })
        $scope.updateTable=true;
      }


      $scope.getUsers = function(){
       authService.GetUsers().then(function(response){
         $scope.users = response.data;
       }).catch(function(err){

       })
       $scope.updateTable=false;
     }


      $scope.register2 = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: $scope.selection};
        authService.Register(user).then(function(response){
          $location.path('user');
        }).catch(function(err){
          $scope.wrongpass2=true;
        })
      }
  }]);
