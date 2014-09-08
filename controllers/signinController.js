/**
 * Created by idostanic on 5.9.14..
 */

app.controller ('signinController', function ($scope,signinService){

    $scope.userID;

    signinService.getUser();

    signinService.signIn(userID);

    signinService.signOut();

});