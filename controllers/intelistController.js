cmsApp.controller('intelistController',  function ($scope, $timeout, $location, cmsService, authenticationService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.syndromeActive="active";
    $scope.currentUser = authenticationService.getCurrentUser();
    
    if($scope.currentUser == null)
    {
        $location.path('/');
    }

    $scope.totalItems;

    $scope.intes =
        cmsService.getInterventions().then(function (intesData) {
            $scope.intes = intesData;
            $scope.totalItems = $scope.intes.length;
            $scope.totalItemsToDisplay = $scope.totalItems;
        });

    $scope.currentPage = 1;
    $scope.maxSize = 500;
    $scope.intesLimitEnd = $scope.currentPage * 10;
    $scope.itemsPerPage = 10;
    $scope.setPage = function () {
        $scope.intesLimitEnd = $scope.currentPage * 10;
    };

    // $scope.pageChanged = function() {
    //     console.log('Page changed to: ' + $scope.currentPage);
    // };
    
    $scope.logOut = function () {
    authenticationService.logOut();
        $location.path("/");
    };
})