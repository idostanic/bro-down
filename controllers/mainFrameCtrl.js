/**
 * Created by idostanic on 22.9.14..
 */
app.controller('mainFrameCtrl',function($scope,ngDialog){

    $scope.name=localStorage.getItem("userName")

    $scope.open = function () {
        ngDialog.open({
            template: 'partials/changePassword.html',
            className: 'ngdialog-theme-plain',
            controller: 'userController',
            scope:$scope
        });
    };
})