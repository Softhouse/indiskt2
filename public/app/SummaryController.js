app.controller('SummaryController', function ($scope, CurrentDate, CurrentOrders, Drinks) {

    $scope.currentDate = CurrentDate;
    $scope.timestamp = new Date();

    $scope.orders = [];

    $scope.drinks = Drinks;

    $scope.drinkCounts = {};

    $scope.orderTypes = {};

    function increaseCounter(map, key) {
        if (!(key in map)) {
            map[key] = 0;
        }
        map[key]++;
    }

    function updateDrinkCount(order) {
        increaseCounter($scope.drinkCounts, order.drink);
    }

    function updateOrderCount(order) {
        var key = order.dish + ':' + order.rice + ':' + order.spiciness;

        if (!(key in $scope.orderTypes)) {
            $scope.orderTypes[key] = {
                'dish': order.dish,
                'rice': order.rice,
                'spiciness': order.spiciness,
                'count': 0
            };
        }

        $scope.orderTypes[key].count++;
    }

    CurrentOrders.$on('child_added', function (snapshot) {
        var order = snapshot.snapshot.value;
        $scope.orders.push(order);
        updateDrinkCount(order);
        updateOrderCount(order);

        $scope.timestamp = new Date();
    });

});