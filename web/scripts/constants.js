angular.module('apolloApp')
    .constant('BASE_URL', window.location.href.split('/#/')[0].split('localhost')[1])
;