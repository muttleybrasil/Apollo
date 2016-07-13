apolloApp.controller('EventoFormController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.eventos = [
                      {id: 1, nome: "Casal 01", dataEvento: "03/08/2017 19:00:00", local: "Local evento 01"},
                      {id: 2, nome: "Casal 02", dataEvento: "03/08/2017 19:00:00", local: "Local evento 02"},
                      {id: 3, nome: "Casal 03", dataEvento: "03/08/2017 19:00:00", local: "Local evento 03"},
                      {id: 4, nome: "Casal 04", dataEvento: "03/08/2017 19:00:00", local: "Local evento 04"},
                      {id: 5, nome: "Casal 05", dataEvento: "03/08/2017 19:00:00", local: "Local evento 05"},
                     ];
    // edicao
    if ($routeParams.id) {
        for (evento in $scope.eventos) {
            if ($scope.eventos[evento].id == $routeParams.id) {
                $scope.evento = $scope.eventos[evento];
                break;
            }
        }
    }
    // wrapper
    $( document ).ready(function() {
        $("#dataEvento").datepicker({
            autoclose: true,
            /*todayHighlight: true,*/
            format: "dd/mm/yyyy",
            language: "pt-BR"
        });
    });
}]);