var loginpage = angular.module('loginpage', []);

loginpage.controller('lgn', function($scope, myFactory) {
    console.log('lgn');
    $scope.myFactory = myFactory;
    $scope.login = 'гость';
});

loginpage.controller()

loginpage.controller('pswd', function($scope) {
    console.log('pswd');
});

loginpage.controller('showname', function($scope, myFactory) {
    console.log('showname');
    $scope.myFactory = myFactory;
    $scope.login = 'гость';
});

loginpage.factory('myFactory', function() {
    return {
        login: 'гость'
    };
});