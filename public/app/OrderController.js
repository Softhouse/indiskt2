app.controller('OrderController', function ($scope, Dish, $firebase, CurrentOrders) {

    var orders = CurrentOrders;

    $scope.drinks = {
        "naturell": "Mineralvatten Naturell",
        "citrus": "Mineralvatten Citrus",
        "cola": "Coca-Cola",
        "cola light": "Coca-Cola Light",
        "fanta": "Fanta",
        "sprite": "Sprite"
    };

    $scope.dishes = Dish.query();

    $scope.order = {};

    $scope.isOrderOk = function (order) {
        return order.email && order.dish && order.spiciness && order.drink;
    };

    $scope.submit = function (order) {
        orders.$add(order).then(function(){
            debugger;
        });
    };

});