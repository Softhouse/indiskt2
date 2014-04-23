var app = angular.module('App', ['Api', 'ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    redirectTo: '/order'
                })
                .when('/order', {
                    templateUrl: 'order.html',
                    controller: 'OrderController'
                })
                .when('/summary', {
                    templateUrl: 'summary.html',
                    controller: 'SummaryController'
                });

            $locationProvider.html5Mode(true);
        })
    ;