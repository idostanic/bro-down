/**
 * Created by idostanic on 4.9.14..
 */
app.service('groupServiceAPI',function($http,$log){

    this.listGroups=function(successCallback,errorCallback){
        $http({
            method: 'GET',
            url: '/api/groups'
        }).success(successCallback).error(errorCallback)

    };
})