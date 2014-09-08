app.controller("showWorkDetailsController", ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get ( 'json/works/works.json'),success( function (data){
			var workId = $routeParams.workId;
			$.each( data[0] ,  function( key, value ){
				if( value.id == workId ){
					$scope.work = value;
				}
			});
		} );
	}
]);