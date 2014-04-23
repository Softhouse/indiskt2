app.controller('OrderController', function ($scope, $location, $firebase, Drinks, Dish, CurrentOrders) {

    $scope.drinks = Drinks;

    $scope.dishes = Dish.query();

    $scope.order = {};

    $scope.isOrderOk = function (order) {
        return order.email && order.dish && order.spiciness && order.drink;
    };

    $scope.submit = function (order) {
        order.rice = order.rice || false;
        CurrentOrders.$add(order).then(function () {
            $location.url('/summary');
        });
    };

});