  app.controller ('userController', function ($location,$scope, $http,userServiceAPI){
        $scope.user={};
        $scope.users=[];

        $scope.userID={};

        $scope.fields={};

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



        
        $scope.signin=function(){

        	userServiceAPI.signin($scope.user,function (data){
        		//console.log("successful sign in... data is: " + data);
                localStorage.setItem('userID',data.value.id);
                localStorage.setItem('userName',data.value.name);

        		$location.path('/profile');
        	},function(data){
        		alert('ERROR');
        	});
        };


    });