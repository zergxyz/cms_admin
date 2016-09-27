cmsApp.controller('synaddController',  function ($scope, $timeout, $location, cmsService) {
    
    $scope.navbarURL = 'views/navbar.html';
    $scope.syndromeActive="active";
    // $scope.currentUser = authenticationService.getCurrentUser();
    
    $scope.newSyn = {
        name:"",
        ic: "",
        mas: "",
        cau: "",
        ref: "",
        algo: "",
        lan: "ENG",
        isAdt: "yes",
        isPeds: "yes"
    }
    $scope.disabled = false;
    
    // $scope.menu = [
    //     ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
    //     ['format-block'],
    //     ['font'],
    //     ['font-size'],
    //     ['font-color', 'hilite-color'],
    //     ['remove-format'],
    //     ['ordered-list', 'unordered-list', 'outdent', 'indent'],
    //     ['left-justify', 'center-justify', 'right-justify'],
    //     ['code', 'quote', 'paragraph'],
    //     ['link', 'image'],
    //     ['css-class']
    // ];

    // $scope.cssClasses = ['test1', 'test2'];



    
    // if($scope.currentUser == null)
    // {
    //     $location.path('/');
    // }

  var synToPost ={};
  $scope.finishCreation = false;
    $scope.addSyndrome = function () {
        synToPost.name = $scope.newSyn.name;
        synToPost.ic = $scope.newSyn.ic;
        synToPost.mas = $scope.newSyn.mas;
        synToPost.cau = $scope.newSyn.cau;
        synToPost.ref = $scope.newSyn.ref;
        synToPost.lan = $scope.newSyn.lan;
        synToPost.isAdt = $scope.newSyn.isAdt;
        synToPost.isPeds = $scope.newSyn.isPeds;
       // synToPost.author = $scope.currentUser.get('username');
       //alert(synToPost.ic);
        $scope.finishCreation = true;
        cmsService.addSyndrome(synToPost).success(function () {
             $location.path('/syndrome');
        });
        // cmsService.addSyndrome(synToPost).then(function () {
        //     $scope.newSyn.title = "";
        //     $scope.newSyn.ic = "";
        //     $scope.newSyn.mas = "";
        //     $scope.newSyn.cau = "";
        //     $scope.newSyn.ref = "";
        //     $scope.newSyn.algo = "";
        //     //$timeout(function(){$scope.alerts.splice(0, 1)}, 2000);
            
        //     $scope.$apply();
        // });
    };
    
    // $scope.logOut = function () {
    // authenticationService.logOut();
    //     $location.path("/");
    // };
})