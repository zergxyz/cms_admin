cmsApp.controller('inteaddController',  function ($scope, $timeout, $location, cmsService, authenticationService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.inteActive="active";
    $scope.currentUser = authenticationService.getCurrentUser();
    
    $scope.newInte = {
        ind: "",
        prd: "",
        cau:"",
        ref: "",
        lan: "ENG"
    }
    $scope.disabled = false;

    
    if($scope.currentUser == null)
    {
        $location.path('/');
    }

  var inteToPost ={};
  $scope.finishCreation = false;
    $scope.addIntervention = function () {
        inteToPost.title = $scope.newInte.title;
        inteToPost.ind = $scope.newInte.ind;
        inteToPost.prd = $scope.newInte.prd;
        inteToPost.cau = $scope.newInte.cau;
        inteToPost.ref = $scope.newInte.ref;
        inteToPost.lan = $scope.newInte.lan;

        $scope.finishCreation = true;
        cmsService.addIntervention(inteToPost).then(function () {
            $scope.newInte.title="";
            $scope.newInte.ind="";
            $scope.newInte.prd="";
            $scope.newInte.cau="";
            $scope.newInte.ref="";
            $scope.newInte.lan="";
            $scope.alerts.push({type: 'success' ,msg: "Successfully Posted! Cheers!"});
            
            $scope.$apply();
        });
    };
    
    $scope.logOut = function () {
    authenticationService.logOut();
        $location.path("/");
    };
})