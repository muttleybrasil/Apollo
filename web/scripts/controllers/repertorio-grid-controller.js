apolloApp.controller('RepertorioGridController', ['$scope', function($scope) {
    $scope.repertorios = [
     {id: 1, evento: "Casmento 01", data: "03/08/2017 19:00:00", status: "concluído"},
     {id: 2, evento: "Casmento 02", data: "03/08/2017 19:00:00", status: "pendente"},
     {id: 3, evento: "Aniversário 01", data: "03/08/2017 19:00:00", status: "pendente"},
     {id: 4, evento: "Casmento 03", data: "03/08/2017 19:00:00", status: "concluído"},
     {id: 5, evento: "Aniversário 02", data: "03/08/2017 19:00:00", status: "concluído"},
    ];
    $scope.remove = function(index) {
        $scope.repertorios.splice(index, 1);
    }
}]);