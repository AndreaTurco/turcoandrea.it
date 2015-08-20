var showWorkDetailsController = angular.module('showWorkDetailsInDialogController', []);

showWorkDetailsController.controller("showWorkDetailsDialogCtrl", ['$scope', '$http', 'workService', '$mdDialog',
    function($scope, $http, workService, $mdDialog){

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };


        $http.get( 'json/works/works.json').success( function (data){
            var workId = workService.getId();
            $.each( data ,  function( key, value ){
                if( value.id == workId ){
                    $scope.work = value;
                }
            });
        } );
    }
]);