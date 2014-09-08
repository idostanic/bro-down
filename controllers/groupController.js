/**
 * Created by idostanic on 4.9.14..
 */
app.controller('groupController',function(groupServiceAPI,$http,$scope){

    $scope.groups=[];

    function listGroups(){
        groupServiceAPI.listGroups(function(data){
            $scope.groups=data;

        },function(data){
            alert('error');
        });

    }

    listGroups();

});