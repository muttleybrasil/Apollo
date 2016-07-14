apolloApp.controller('MomentoFormController', function($location, $routeParams, toastr, MESSAGE, MomentoService, MomentoModel) {
    var viewModel = this;
        viewModel.id = $routeParams.id ? $routeParams.id : null;

    this.create = function() {
        MomentoService.create(new MomentoModel(viewModel)).then(function(){
            toastr.success(MESSAGE.SUCCESS.CREATE);
            $location.path('/momento');
        });
    }
    this.update = function() {
       var modelInstance = new MomentoModel(viewModel);
        MomentoService.update(modelInstance).then(function(){
            toastr.success(MESSAGE.SUCCESS.UPDATE);
            modelInstance.class = "grid-item";
            $location.path('/momento');
        });
    }
    // edicao
    if ($routeParams.id) {
        MomentoService.getOne({id: $routeParams.id}).then(function(momento){
            viewModel.nome = momento.nome;
        });
    }
});