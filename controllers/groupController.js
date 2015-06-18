/**
 * Created by idostanic on 4.9.14..
 */
app.controller('groupController', groupController);
    var t = "a";

   function groupController (groupServiceAPI,$http,$scope) {
        $scope.groups=[];
       listGroups();
       function listGroups (){
            var d= "a  ";
            groupServiceAPI.listGroups(function (data){
                $scope.groups=data;
            },function(data){
                alert('ERROR');
            });
        }


    }
