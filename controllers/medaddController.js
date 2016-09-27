cmsApp.controller('medaddController',  function ($scope, $timeout, $location, cmsService, authenticationService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.medActive="active";
    $scope.currentUser = authenticationService.getCurrentUser();
    
    $scope.newMed = {
        ind: "",
        cau: "",
        af:"",
        ref: "",
        lan: "ENG"
    }
    $scope.disabled = false;

    
    if($scope.currentUser == null)
    {
        $location.path('/');
    }

  var medToPost ={};
  $scope.finishCreation = false;
    $scope.addMedication = function () {
        medToPost.title = $scope.newMed.title;
        medToPost.ind = $scope.newMed.ind;
        medToPost.cau = $scope.newMed.cau;
        medToPost.af = $scope.newMed.af;
        medToPost.ref = $scope.newMed.ref;
        medToPost.lan = $scope.newMed.lan;
       // synToPost.author = $scope.currentUser.get('username');
       //alert(synToPost.ic);
        $scope.finishCreation = true;
        cmsService.addMedication(medToPost).then(function () {
            $scope.newMed.title = "";
            $scope.newMed.ind = "";
            $scope.newMed.cau = "";
            $scope.newMed.af = "";
            $scope.newMed.ref = "";
            $scope.newMed.lan = "";
            $scope.alerts.push({type: 'success' ,msg: "Successfully Posted! Cheers!"});
            //$timeout(function(){$scope.alerts.splice(0, 1)}, 2000);
            
            $scope.$apply();
        });
    };
    
    $scope.logOut = function () {
    authenticationService.logOut();
        $location.path("/");
    };
})