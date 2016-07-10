apolloApp.controller('BandaGridController', ['$scope', function($scope) {
    $scope.banda = [
     {id: 1, instrumento: "instrumento 01", musico: "Nome do Músico", status: "confirmado"},
     {id: 2, instrumento: "instrumento 02", musico: "Nome do Músico", status: "confirmado"},
     {id: 3, instrumento: "instrumento 03", musico: "Nome do Músico", status: "pendente"},
     {id: 4, instrumento: "instrumento 04", musico: "Nome do Músico", status: "recusado"},
     {id: 5, instrumento: "instrumento 05", musico: "Nome do Músico", status: "pendente"},
    ];
    $scope.remove = function(index) {
        $scope.banda.splice(index, 1);
    };
}]);