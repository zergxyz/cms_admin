cmsApp.controller('medlistController',  function ($scope, $timeout, $location, cmsService, authenticationService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.syndromeActive="active";
    $scope.currentUser = authenticationService.getCurrentUser();
    
    if($scope.currentUser == null)
    {
        $location.path('/');
    }

    $scope.totalItems;

    $scope.meds =
        cmsService.getMedications().then(function (medsData) {
            $scope.meds = medsData;
            $scope.totalItems = $scope.meds.length;
            $scope.totalItemsToDisplay = $scope.totalItems;
        });

    $scope.currentPage = 1;
    $scope.maxSize = 500;
    $scope.medsLimitEnd = $scope.currentPage * 10;
    $scope.itemsPerPage = 10;
    $scope.setPage = function () {
        $scope.medsLimitEnd = $scope.currentPage * 10;
    };

    // $scope.pageChanged = function() {
    //     console.log('Page changed to: ' + $scope.currentPage);
    // };
    
    $scope.logOut = function () {
    authenticationService.logOut();
        $location.path("/");
    };
})