apolloApp.controller('EventoFormController', ['$scope', function($scope) {
    // wrapper
    $( document ).ready(function() {
        $("#dataEvento").datepicker({
            autoclose: true,
            /*todayHighlight: true,*/
            format: "dd/mm/yyyy",
            language: "pt-BR"
        });
    });
    //
    $scope.evento = {id: 1, nome: "Casal 01", data: "03/08/2017 19:00:00", local: "Local evento 01"};
}]);