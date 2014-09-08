    var app=angular.module('app',['ngRoute','LocalStorageModule']);

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
                    controller:'userController',
                    templateUrl:'partials/profile.html'
                })
                .otherwise({redirectTo:'/signin'});

    });