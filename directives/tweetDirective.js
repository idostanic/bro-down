/**
 * Created by idostanic on 11.9.14..
 */
app.directive ('listDirectives',function(){
    return{
        restrict: "E",
        replace: true,
        templateUrl:'/directives/tweetsTemplate.html',
        scope:{
            tweets:'='
        },
        controller:'userController'
    }

});


//wolkaboutApp.directive('deviceReadingTile', function () {
//    return {
//        restrict: 'E',
//        replace: true,
//        scope: {
//            pointFeed: '='
//        },
//        templateUrl: "components/deviceReadingTile/deviceReadingTile.html",
//        controller: 'DeviceReadingTileController'
//    }
//});
