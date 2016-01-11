angular.module('app');

function TestCtrl() {
    $scope.message = 'Hey from AngularJS';
}

angular
    .module('app')
    .controller('TestCtrl', TestCtrl);
