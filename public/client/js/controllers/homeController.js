/**
 * Created by subash on 3/2/17.
 */
app.controller('homeController',['$scope',function($scope){
    $scope.social = {
        linkedin: 'https://www.linkedin.com/in/subash',
        twitter: 'https://twitter.com/subash',
        skype: 'skype:subash',
        github: 'https://github.com/subash/'
    };
    $scope.phone = '+91 9597139973';
    $scope.address = {street: 'North Masi Street.', state: 'TN, India.'};
    $scope.mail = 'subashfjain@gmail.com';
}]);
