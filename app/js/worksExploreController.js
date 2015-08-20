var worksExploreController = angular.module('worksExploreController', []);

worksExploreController
    .controller('worksExploreCtrl', ['$scope', '$http',
        function($scope,$http){
            $http.get('json/works/works.json').success( function(data){
                $scope.allWorks = data;
            });

            $scope.orderProp = 'id';

        }]
    )
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $mdDialog, workService) {
        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');
        /**
         * Build handler to open/close a SideNav; when animation finishes
         * report completion in console
         */
        function buildToggler(navID) {
            var debounceFn =  $mdUtil.debounce(function(){
                $mdSidenav(navID)
                    .toggle();
            },300);
            return debounceFn;
        }

        $scope.showAdvanced = function(ev, workId) {
            workService.setId(workId);
            $mdDialog.show({
                controller: "showWorkDetailsDialogCtrl",
                templateUrl: "views/workDetailsModal.html",
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
        };
    });