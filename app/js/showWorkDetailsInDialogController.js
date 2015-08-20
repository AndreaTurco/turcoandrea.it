var showWorkDetailsController = angular.module('showWorkDetailsInDialogController', []);

showWorkDetailsController.controller("showWorkDetailsDialogCtrl", ['$scope', '$http', 'workService',
    function($scope, $http, workService){
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