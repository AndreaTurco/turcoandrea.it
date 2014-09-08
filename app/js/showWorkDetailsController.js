var showWorkDetailsController = angular.module('showWorkDetailsController', []);

showWorkDetailsController.controller("showWorkDetailsCtrl", ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http){
		$http.get( 'json/works/works.json').success( function (data){
			var workId = $routeParams.workId;
			$.each( data ,  function( key, value ){
				if( value.id == workId ){
					$scope.work = value;
				}
			});
		} );
	}
]);