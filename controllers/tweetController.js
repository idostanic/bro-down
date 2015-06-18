/**
 * Created by idostanic on 8.9.14..
 */
app.controller('tweetController',tweetController);
function tweetController ($scope,tweetService,ngDialog) {


    $scope.tweets = [];
    $scope.tweet;
    $scope.name;
    $scope.pages;
    $scope.niz = [];

    $scope.getNumber = function (num) {
        return new Array(num);
    }

    $scope.currentPage;


    $scope.postTweet = function (tweet) {
        console.log("sranje je ovo veliko");
        tweetService.postTweet(tweet, function (data) {

            getUsersTweets();

            alert("tweet sent");

        }, function (data) {

            alert("error while saving tweets");
        })


    }


    function getUsersTweets() {
        var data1;
        tweetService.getUsersTweets(function (data) {
            console.log(" inside data is: " + data);
            data1=data;
            $scope.tweets = data;
        }, function (data) {
            alert('error with tweets');
        });
        console.log("outside data: "+data1);
    }

    getUsersTweets();

    function getName() {
        $scope.name = localStorage.getItem('userName');
    }

    getName();

    $scope.getPages = function () {
        tweetService.getPages(function (data) {
            $scope.pages = data;
            ;

        }, function (data) {
            alert("error getting number of pages** " + data);
        });

    }
    $scope.getPages();


    $scope.getTweetsByPage = function (num) {

        tweetService.getUsersTweetsByPages(num, function (data) {
            $scope.currentPage = num;
            $scope.tweets = data;
        }, function (data) {
            alert('ERROR WITH PAGING TWEETS');
        })
    };

    $scope.findCont = function () {


        tweetService.findCont($scope.searchContent, $scope.currentPage, function (data) {

            $scope.tweets = data;

        }, function (data) {
            alert("ERROR WITH FINDING CONTENT");
        })

    };


//    $scope.autoSignOut=function(){
//        var loginTime=localStorage.getItem('loginTime');
//        loginTime.getUTCMilliseconds();
//        console.log(loginTime +"  vreme logovanja");
//        var currentTime=new Date().getUTCMilliseconds();;
//        console.log(currentTime +"  trenutno vreme");
//        if(loginTime+5>currentTime){
//
//            localStorage.clear();
//            $location.path('/signin');
//        }
//    }

};