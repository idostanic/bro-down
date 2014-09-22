app.service('teacherServiceAPI',function($http,$log){
	
	this.listTeachers=function (successCallback,errorCallback){
		$http({
			method:'GET',
			url:'/api/teachers'
			
		}).success(successCallback).error(errorCallback)
	};

    this.listTeachersforGroup=function (gid,successCallback,errorCallback){
        $http({
            method:'GET',
            url:'/api/teachersByGroup',
            params:{
                gid:gid
            }

        }).success(successCallback).error(errorCallback)
    };


});