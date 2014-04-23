angular.module('Api', ['ngResource', 'firebase'])
    .factory('CurrentDate', function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
    })
    .factory('Dish', function ($resource) {
        return $resource('dishes.json');
    })
    .factory('MyFirebase', function () {
        return new Firebase("https://indiskt.firebaseio.com/");
    })
    .factory('CurrentOrders', function ($firebase, MyFirebase, CurrentDate) {
        return $firebase(MyFirebase.child('orders').child(CurrentDate));
    })
;
