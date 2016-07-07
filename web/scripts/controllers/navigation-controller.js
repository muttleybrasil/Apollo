apolloApp.controller('NavigationController', ['$scope', function($scope) {
    // init jquery events
    $( document ).ready(function() {
        $('a[href="#' + window.location.href.split('#')[1] + '"]').parents('li').addClass('active');
        $('.navbar-static-side a').click(function(){
            $('.navbar-static-side a').parents('li').removeClass("active");
            $(this).parents('li').addClass('active');
        });
    });
}]);