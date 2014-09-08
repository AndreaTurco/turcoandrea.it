app.controller('worksExploreController', ['$scope', '$http',
	function($scope,$http){
		$http.get('json/works/works.json').success( function(data){
    		$scope.allWorks = data;
    	});

    	$scope.orderProp = 'id';
	}
]);