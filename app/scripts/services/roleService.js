angular.module('AngularScaffold.Services').factory('RoleService', ['$log',
	function($log){
		var roles = [];
		var currentRole;
		var currentNombre;	
		var surveys = {};
		return{	
				setSurveys: function(survey){
				//console.log(roles);
          surveys=survey;
        },
				getSurveys: function(){
				//console.log(roles);
          return surveys;
        },
						setCurrentRoles: function(role){
				//console.log(roles);
          currentRole=role;
        },
				getCurrentRoles: function(){
				//console.log(roles);
          return currentRole;
        },
        	
						setCurrentNombre: function(nombre){
				//console.log(roles);
          currentNombre=nombre;
        },
				getCurrentNombre: function(){
				//console.log(roles);
          return currentNombre;
        },
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
