cmsApp.controller('synlistController',  function ($scope, $timeout, $location, cmsService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.syndromeActive="active";
    // $scope.currentUser = authenticationService.getCurrentUser();
    
    // if($scope.currentUser == null)
    // {
    //     $location.path('/');
    // }

    $scope.totalItems;
    
    cmsService.getSynList().success(function(syndsData) {
		$scope.syndromes = syndsData;
        $scope.totalItems = $scope.syndromes.length;
        $scope.totalItemsToDisplay = $scope.totalItems;
    });

    // $scope.syndromes =
    //     cmsService.getSynList().then(function (syndsData) {
    //         $scope.syndromes = syndsData;
    //         $scope.totalItems = $scope.syndromes.length;
    //         $scope.totalItemsToDisplay = $scope.totalItems;
    //     });

    $scope.currentPage = 1;
    $scope.maxSize = 500;
    $scope.syndsLimitEnd = $scope.currentPage * 10;
    $scope.itemsPerPage = 10;
    $scope.setPage = function () {
        $scope.syndsLimitEnd = $scope.currentPage * 10;
    };

    $scope.pageChanged = function() {
        console.log('Page changed to: ' + $scope.currentPage);
    };
    
    $scope.logOut = function () {
    // authenticationService.logOut();
        $location.path("/");
    };
})