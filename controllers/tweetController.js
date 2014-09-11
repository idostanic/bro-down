/**
 * Created by idostanic on 8.9.14..
 */
app.controller('tweetController',function($scope,tweetService){
    $scope.tweets=[];
    $scope.tweet;
    $scope.pages;
    $scope.niz=[];
    $scope.getNumber = function(num) {
        return new Array(num);
    }
    $scope.currentPage;


    $scope.postTweet=function(){
        tweetService.postTweet($scope.tweet,function(data){
            alert("tweet sent");
        },function(data){
            alert("error while saving tweets");
        })
    }


    function getUsersTweets(){

        tweetService.getUsersTweets(function (data) {
            console.log("successful sign in... data is: " + data);
            $scope.tweets=data;
        },function(data){
            alert('error with tweets');
        });
    }
    //zakomentarisani tweets
    //getUsersTweets();



    $scope.getPages = function(){
        tweetService.getPages(function(data){
            $scope.pages=data;
           ;

        },function(data){
            alert("error getting number of pages** "+data);
        });

    }
    $scope.getPages();


    $scope.getTweetsByPage=function(num){

        tweetService.getUsersTweetsByPages(num,function (data){
            $scope.currentPage=num;
            $scope.tweets=data;
        },function(data){
            alert('ERROR WITH PAGING TWEETS');
        })
    };

    $scope.findCont=function(){


        tweetService.findCont($scope.searchContent,$scope.currentPage,function(data){

            $scope.tweets=data;

        },function(data){
            alert("ERROR WITH FINDING CONTENT");
        })

    };

});