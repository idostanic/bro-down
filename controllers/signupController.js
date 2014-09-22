/**
 * Created by idostanic on 12.9.14..
 */
app.controller('signupController',function($location,$scope, $http,userServiceAPI,teacherServiceAPI,groupServiceAPI){

        $scope.user={};
        $scope.teachers=[];
        $scope.groups=[];



    $scope.groups=[];

    function listGroups(){
        groupServiceAPI.listGroups(function(data){
            $scope.groups=data;

        },function(data){
            alert('error');
        });

    }

    listGroups();

    $scope.listTeachersforGroup=function(gid){
        teacherServiceAPI.listTeachersforGroup(gid,function (data){
            $scope.teachers=data;
        },function(data){
            alert("error with getting teachers for group");
        });

    }

    $scope.saveUser=function(){

        userServiceAPI.saveUser($scope.user,function(data){
            alert( data.name +' is saved with id:' + data.id);
            $location.path('/signin')
        },function(data){
            alert('ERROR');

        })
    };



});

