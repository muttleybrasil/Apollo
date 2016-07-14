angular.module('apolloApp')
    .constant('BASE_URL', window.location.href.split('/#/')[0].split('localhost')[1])
    .constant('MESSAGE', {
        'SUCCESS': {
            'CREATE': 'Cadastro efetuado com sucesso!',
            'UPDATE': 'Dados atualizados com sucesso!'
        }
    })
;