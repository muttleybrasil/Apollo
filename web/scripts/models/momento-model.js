apolloApp.factory('MomentoModel', function () {
    function MomentoModel(data) {
        this.id = null;
        this.nome = null;
        if (data) {
            if (data.id) {
                this.id = data.id;
            }
            if (data.nome) {
                this.nome = data.nome;
            }
        }
    }
    return MomentoModel;
});