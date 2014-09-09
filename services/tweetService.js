/**
 * Created by idostanic on 8.9.14..
 */
app.service('tweetService',function($http) {

    this.getUsersTweets=function (successCallback,errorCallback){
    	
        var loginUser=localStorage.getItem('userID');
        
        console.log(loginUser);
        $http({
            method:'GET',
            url:'/api/profile',
            params:{loginUser:loginUser
                   }

        }).success(successCallback).error(errorCallback)

    };



    this.getPages=function(successCallback,errorCallback){

        var loginUser=localStorage.getItem('userID');

        $http({
            method:'GET',
            url:'/api/TweetPages',
            params:{
                loginUser:loginUser

            }
        }).success(successCallback).error(errorCallback)
    };

    this.getUsersTweetsByPages=function (num,successCallback,errorCallback){

        var loginUser=localStorage.getItem('userID');

        $http({
            method:'GET',
            url:'/api/pageTweets',
            params:{loginUser:loginUser,
                    num:num
            }

        }).success(successCallback).error(errorCallback)

    };

});
