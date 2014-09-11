    var app=angular.module('app',['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
                .when('/users',
                {
                    controller:'userController',
                    templateUrl:'partials/users.html'
                })
                .when('/signup',
                {
                    controller:'userController',
                    templateUrl: 'partials/signup.html'

                })
                .when('/signin',
                {
                	controller:'userController',
                	templateUrl:'partials/signin.html'
                })
                .when('/profile',{
                    controller:'tweetController',
                    templateUrl:'partials/profile.html'
                })
                .otherwise({redirectTo:'/signin'});

    });

    app.run(function($rootScope,$location){
        var publicRoutes= ['/signin','/signup'];


        var isPublicRoute = function (route) {
            publicRoutes.forEach(function (publicRoute) {
                if (route === publicRoute) {
                    console.log("pre true");
                    return true;
                }
            });
            console.log("pre false");
            return false

        };


        $rootScope.$on('$routeChangeSuccess',function(){

            var a=!isPublicRoute($location.url());
            var b=("userID" in localStorage);
            var c=typeof localStorage.getItem('userID') !== 'undefined';
            if(a && b && c){
                console.log(!a);
                console.log(b);
                console.log(c);

//                if($location.url()==='/signin')
//                    $location.path('/signin');
//                else
//                    $location.path('signup')
            }
        });

    });