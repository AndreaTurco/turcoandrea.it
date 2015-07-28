var worksExploreController = angular.module('worksExploreController', []);

worksExploreController.controller('worksExploreCtrl', ['$scope', '$http',
	function($scope,$http){
		$http.get('json/works/works.json').success( function(data){
    		$scope.allWorks = data;
    	});

    	$scope.orderProp = 'id';
	}
]).controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
	$scope.toggleLeft = buildToggler('left');
	$scope.toggleRight = buildToggler('right');
	/**
	 * Build handler to open/close a SideNav; when animation finishes
	 * report completion in console
	 */
	function buildToggler(navID) {
        var body= $('body');
		var debounceFn =  $mdUtil.debounce(function(){
			$mdSidenav(navID)
				.toggle()
				.then(function () {
					$log.debug("toggle " + navID + " is done");
                    //body.toggleClass('overflowBody');
				});
		},300);
		return debounceFn;
	}
});