apolloApp.controller('EventoGridController', ['$scope', function($scope) {
    $scope.eventos = [
     {id: 1, nome: "Casal 01", dataEvento: "03/08/2017 19:00:00", local: "Local evento 01"},
     {id: 2, nome: "Casal 02", dataEvento: "03/08/2017 19:00:00", local: "Local evento 02"},
     {id: 3, nome: "Casal 03", dataEvento: "03/08/2017 19:00:00", local: "Local evento 03"},
     {id: 4, nome: "Casal 04", dataEvento: "03/08/2017 19:00:00", local: "Local evento 04"},
     {id: 5, nome: "Casal 05", dataEvento: "03/08/2017 19:00:00", local: "Local evento 05"},
    ];
    $scope.visualizar = function(evento) {
        console.log(evento);
    };
    $scope.remove = function(index) {
        $scope.eventos.splice(index, 1);
    }
}]);