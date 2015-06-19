app.service('userServiceAPI', function ($http, $log) {


    this.saveUser = function (requestData, successCallback, errorCallback) {
        $http({
            method: 'POST',
            url: '/api/user',
            data: requestData
        }).success(successCallback).error(errorCallback);
    };


    this.listUsers = function (successCallback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/allUsers'

        }).success(successCallback).error(errorCallback);

    };

    this.signin = function (requestData, successCallback, errorCallback) {
        $http({
            method: 'POST',
            url: '/api/signin',
            data: requestData

        }).success(successCallback).error(errorCallback)

    };

    this.changeInfo = function (oldPassword, newPassword, successCallback, errorCallback) {
        var loginUser = localStorage.getItem('userID');
        loginUser = parseInt(loginUser);

        console.log("podaci")
        console.log(loginUser);
        console.log(oldPassword);
        console.log(newPassword);
        console.log("  ");

        $http({
            method: 'PUT',
            url: '/api/changePass',
            data: {
                newPassword: newPassword,
                oldPassword: oldPassword,
                id: loginUser
            }
        }).success(successCallback).error(errorCallback)
    };


});