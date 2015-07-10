app.controller('main.controller', ['$scope', function($scope) {
    $scope.title = 'Project Vigil';
    $scope.promo = 'Test Site';
    $scope.games = [
            {
                name: 'Dark Souls 3',
                price: '59.99',
                rating: 'PEGI 16',
                cover: 'img/dark_souls_3_cover_xb1.jpg'
            },
            {
                name: 'Metal Gear Solid V: The Phantom Pain',
                price: '59.99',
                rating: 'PEGI 18',
                cover: 'img/mgsv_cover.jpg'
            }
        ]
}]);