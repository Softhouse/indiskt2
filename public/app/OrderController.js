app.controller('OrderController', function ($scope, Dish, Order) {

    $scope.drinks = {
        "naturell": "Mineralvatten Naturell",
        "citrus": "Mineralvatten Citrus",
        "cola": "Coca-Cola",
        "cola light": "Coca-Cola Light",
        "fanta": "Fanta",
        "sprite": "Sprite"
    };

    $scope.dishes = Dish.query();

    $scope.order = new Order();

    $scope.isOrderOk = function (order) {
        return order.email && order.dish && order.spiciness && order.drink;
    };

    $scope.submit = function (order) {
        order.$save();
    };

});