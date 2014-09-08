  app.controller ('userController', function ($location,$scope, $http,userServiceAPI,signinService){
        $scope.user={};
        $scope.users=[];
        $scope.tweets=[];
        $scope.userID={};



        $scope.saveUser=function(){

            userServiceAPI.saveUser($scope.user,function(data){
            	alert( data.name +' is saved with id:' + data.id);
            	
            },function(data){
            	alert('ERROR');
            	
            })
        };
        
        function listUsers(){
        	userServiceAPI.listUsers(function (data){
        		$scope.users=data;
        	},function(data){
        		alert('ERROR');
        	});
        }
        
        listUsers();


         $scope.getUsersTweets=function(){

             userServiceAPI.getUsersTweets($scope.loginUser, function (data) {
                 console.log("successful sign in... data is: " + data);
                 $scope.tweets=data;
             },function(data){
                 alert('error with tweets');
             });
         };
        
        $scope.signin=function(){

        	userServiceAPI.signin($scope.user,function (data){
        		//console.log("successful sign in... data is: " + data);
   
                //userID=data.value.id
                
               // signinService.signIn(data.value.)
        		$location.path('/profile');
        	},function(data){
        		alert('ERROR');
        	});
        };


    });