    var app=angular.module('app',['ngRoute','ui.router','ngDialog']);

    app.config(function ($stateProvider, $urlRouterProvider ){

        $urlRouterProvider.otherwise('/signin');
        $stateProvider

                .state('signup',
                {
                    url:'/signup',
                    controller:'signupController',
                    templateUrl: 'partials/signup.html'

                })
                .state('signin',
                {
                    url:'/signin',
                	controller:'userController',
                	templateUrl:'partials/signin.html'
                })
                .state('home',
                {
                    abstract:true,
                    url:'/',
                    controller:'mainFrameCtrl',
                    templateUrl:'partials/mainFrame.html'
                })
                .state('home.profile',{
                    url:'profile',
                    controller:'tweetController',
                    templateUrl:'partials/profile.html'
                })
                .state('home.users',
                {
                    url:'users',
                    controller:'userController',
                    templateUrl:'partials/users.html'
                })


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
            if(a && !b && c){
                console.log(a);
                console.log(b);
                console.log(c);
                $location.path('/signin');

//                if($location.url()==='/signin')
//                    $location.path('/signin');
//                else
//                    $location.path('signup')
            }
        });

    });