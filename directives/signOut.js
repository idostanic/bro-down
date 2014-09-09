/**
 * Created by idostanic on 9.9.14..
 */
app.directive('signOut',function(){
    return{
        restrict:'E',
        scope:{
            callback: '&'
        }

    }





})

app.controller('signOutCtrl',function($scope,$location){
    localStorage.clear();
    $location.path('/signup');
})