angular.module('userProfiles').service('mainService', function($http, $q) {

  this.getUsers = function() {

  	var defer = $q.defer();

    return $q({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=1'
    }).then(function(response) {
    	var parsedResponse = response.data.data
    	// parsedResponse.forEach(function(x){
    	// 	x.name = 'Ralf'; 
    	// })
    	defer.resolve(parsedResponse);
    })

  }

});
