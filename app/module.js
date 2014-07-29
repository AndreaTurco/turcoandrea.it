var app = angular.module('worksBlog', ['ngRoute', 'ngResource']);

app.config(function($routeProvider){

    $routeProvider.when("/explore", {
        controller: "worksExploreController",
        templateUrl: "/app/views/worksresults.html"
    });
    $routeProvider.otherwise({ redirectTo: "/explore" });

});