app.controller('teacherController',function ($scope,$http,teacherServiceAPI){
	$scope.teachers=[];
	
	function listTeachers(){
		teacherServiceAPI.listTeachers(function (data){
			$scope.teachers=data;
		},function(data){
			alert('ERROR');
		});
	}
	
	listTeachers();
	
})