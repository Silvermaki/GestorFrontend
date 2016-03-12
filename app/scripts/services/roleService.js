angular.module('AngularScaffold.Services').factory('RoleService', ['$log',
	function($log){
		var roles = [];
		var currentRole;	
		return{	
					setCurrentRole: function(role){
				//console.log(roles);
          currentRole=role;
        },
				getCurrentRole: function(){
				//console.log(roles);
          return currentRole;
        },
        	
				getRoles: function(){
				//console.log(roles);
          return roles;
        },
        		setRoles: function(currentRoles){
          roles = currentRoles;
          //console.log(roles);
        }
	    };
}]);
