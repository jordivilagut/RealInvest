var nyslApp = angular.module('realInvestApp', []);

nyslApp.controller('realInvestController', function($scope){
    $scope.properties = properties;

    $scope.city = {
        "type": "select", 
        "name": "city",
        "value": "Barcelona", 
        "values": ["Barcelona"] 
    };

    $scope.income = {
        "type": "select", 
        "name": "income",
        "value": "Selecciona tu capacidad de ahorro", 
        "values": ["Selecciona tu capacidad de ahorro","Inferior a 800€", "800-1500€", "1500-2500€", "Superior a 2500€"] 
    };

    $scope.savings = {
        "type": "select", 
        "name": "savings",
        "value": "savings", 
        "values": ["Selecciona tu capacidad de ahorro","Inferior a 800€", "800-1500€", "1500-2500€", "Superior a 2500€"] 
    };
});