var app = angular.module('worksBlog', [
    'showWorkDetailsController',
    'worksExploreController',

    'ngRoute',
    'ngResource'
]);

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