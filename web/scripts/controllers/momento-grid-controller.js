apolloApp.controller('MomentoGridController', function(MomentoService) {
    var viewModel = this;
    MomentoService.getCollection().then(function(data){
        viewModel.momentos = data;
    });
    this.remove = function(momento) {
        MomentoService.remove(momento);
    };
});
