/**
 * Created by idostanic on 12.9.14..
 */
app.controller('signupController',signupController );

function signupController ($location,$scope,userServiceAPI,teacherServiceAPI,groupServiceAPI){

        $scope.user={};
        $scope.teachers=[];
        $scope.groups=[];
    listGroups();

    function listGroups(){
        console.log("pre")
        groupServiceAPI.listGroups(function(data){
            $scope.groups=data;

        },function(data){
            alert('error');
        });

    };

    $scope.updateTeachers = function(gid){
        listTeachersforGroup(gid);
    }

    function listTeachersforGroup(gid){
        teacherServiceAPI.listTeachersforGroup(gid,function (data){
            $scope.teachers=data;
        },function(data){
            alert("error with getting teachers for group");
        });

    };

    $scope.saveUser=function(user){
        user.groupId=parseInt(user.groupId);
        //var user2 =user;
        //user2.id= parseInt(user2.id);
        //user2.groupId=parseInt(user2.groupId);
        //user2.teacherId=parseInt(user2.teacherId);
        userServiceAPI.saveUser(user,function(data){
            alert( data.name +' is saved with id:' + data.id);
            $location.path('/signin')
        },function(data){
            alert('ERROR');

        })
    };



};

