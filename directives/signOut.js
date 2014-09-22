/**
 * Created by idostanic on 9.9.14..
 */
app.directive('signOut',function($location){
    return{
        restrict: 'E',
        replace: true,
        template:'<label data-ng-click="sOut()">Sign Out</label>',
        link:function(scope, elem, attrs) {
            scope.sOut=function(){
                console.log('brise local storage');
                localStorage.clear();
                $location.path('/signin')
            };
        }
    };







});

