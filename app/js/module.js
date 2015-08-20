var app = angular.module('worksBlog', [
    'showWorkDetailsController',
    'showWorkDetailsInDialogController',
    'worksExploreController',

    'ngRoute',
    'ngResource',
    "ngMaterial"
]).service('workService', function(){
    var workId = null;

    var setId = function(id){
        workId = id;
    };
    var getId = function(){
        return workId;
    };

    return {
        setId : setId,
        getId : getId
    };
});


app.config(['$routeProvider',
    function($routeProvider){

        $routeProvider.when("/explore", {
            controller: "worksExploreCtrl",
            templateUrl: "views/worksresults.html"
        })
        .when("/workDetails/:workId",{
            controller: "showWorkDetailsCtrl",
            templateUrl: "views/workDetails.html"
        });
        $routeProvider.otherwise({ redirectTo: "/" });

    }
]);