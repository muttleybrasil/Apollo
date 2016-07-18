apolloApp.factory('MomentoService', function ($q, MomentoModel) {
    var momentos = [
                    new MomentoModel({id: 1, nome: "Momento 01"}),
                    new MomentoModel({id: 2, nome: "Momento 02"}),
                    new MomentoModel({id: 3, nome: "Momento 03"}),
                    new MomentoModel({id: 4, nome: "Momento 04"}),
                    new MomentoModel({id: 5, nome: "Momento 05"}),
                ];
    return {
        getOne: function(criteria, refresh) {
            var deferred = $q.defer();
            momentos.forEach(function(item, index) {
                if (item.id == criteria.id) {
                    deferred.resolve(item);
                }
            });
            return deferred.promise;
        },
        getCollection: function(criteria, refresh) {
            var deferred = $q.defer();
                deferred.resolve(momentos);
            return deferred.promise;
        },
        create: function (momentoModel) {
            var deferred = $q.defer();
                momentoModel.id = Math.floor(Date.now() / 1000);
                momentos.push(momentoModel);
            deferred.resolve(momentoModel);
            return deferred.promise;
        },
        update: function (momentoModel) {
            var deferred = $q.defer();
                momentos.forEach(function(item, index){
                    if (item.id == momentoModel.id) {
                        momentos[index] = momentoModel;
                        deferred.resolve();
                    }
                });
            return deferred.promise;
        },
        remove: function (momento) {
             momentos.forEach(function(item, index) {
                if (item.id == momento.id) {
                    momentos.splice(index, 1);
                }
            });
        }
    };
});