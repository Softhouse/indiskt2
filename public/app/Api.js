angular.module('Api', ['ngResource'])
    .factory('Dish', function ($resource) {
        return $resource('dishes.json');
    })
    .factory('Order', function ($resource) {
        return $resource('/api/orders/:id', {'id': '@id'});
    })
;
