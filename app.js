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
        var publicRoutes= ['/signin'];

       // var routePermission=['/profile'];

        var isPublicRoute= function(route){
            publicRoutes.forEach(function (publicRoute){
                if (route === publicRoute){
                    return true;
                }

            });
            return false;
        };


        $rootScope.$on('$routeChangeStart',function(){
            if(true){
                //!isPublicRoute($location.url()) && (localStorage.getItem('userID')!==null
                $location.path('/signin');
            }
        });

    })