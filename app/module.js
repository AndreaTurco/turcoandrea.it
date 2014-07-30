var app = angular.module('worksBlog', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){

    $routeProvider.when("/explore", {
        controller: "worksExploreController",
        templateUrl: "/app/views/worksresults.html"
    })
    .when("/workDetails/:workId",{
    	controller: "showWorkDetailsController",
    	templateUrl: "/app/view/workDetails.html"
    });
    $routeProvider.otherwise({ redirectTo: "/" });

});