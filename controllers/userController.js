  app.controller ('userController', function ($location,$scope,$state, $http,userServiceAPI){

        $scope.user={};
        $scope.users=[];
        $scope.passwords=[];
        $scope.userID={};

        $scope.fields={};




        
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
                var time=new Date();
                time.getMilliseconds();
                localStorage.setItem('loginTime',time);
                $state.transitionTo('home.profile');
        		//$location.path('/profile');
        	},function(data){
        		alert('ERROR');
        	});
        };

        $scope.changePassword=function(){
            userServiceAPI.changeInfo($scope.oldPassword,$scope.newPassword,function (data){
                $scope.closeThisDialog();
                    alert("password is changed");

            },
            function(data){
                alert('error changing password');
            });
        };

    });