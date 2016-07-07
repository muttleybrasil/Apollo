apolloApp.controller('MusicaController', ['$scope', function($scope) {
    $scope.musicas = [
     {id: 1, momento: "momento 01", nome: "Nome da Música", link: "Link da música 01"},
     {id: 2, momento: "momento 02", nome: "Nome da Música", link: "Link da música 02"},
     {id: 3, momento: "momento 03", nome: "Nome da Música", link: "Link da música 03"},
     {id: 4, momento: "momento 04", nome: "Nome da Música", link: "Link da música 04"},
     {id: 5, momento: "momento 05", nome: "Nome da Música", link: "Link da música 05"},
    ];
    $scope.remove = function(index) {
        $scope.musicas.splice(index, 1);
    };
}]);