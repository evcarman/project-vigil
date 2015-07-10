app.directive('game', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'templates/directives/game.template.html'
    };
});