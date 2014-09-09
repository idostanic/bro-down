   app.service('userServiceAPI',function($http,$log) {



        this.saveUser = function (requestData, successCallback, errorCallback) {
            $http({
                method: 'POST',
                url: '/api/user',
                data: requestData
            }).success(successCallback).error(errorCallback);
        };
    
   
   		this.listUsers= function (successCallback,errorCallback){
   			$http({
   				method:'GET',
   				url:'/api/allUsers'
   				
   			}).success(successCallback).error(errorCallback);
   			
   		};
   		
   		this.signin= function(requestData,successCallback,errorCallback){
   			$http({
   				method: 'POST',
   				url:'/api/signin',
   				data: requestData
   				
   			}).success(successCallback).error(errorCallback)
   			
   		};


   });