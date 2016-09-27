cmsApp.controller('meddetailController', function ( $scope, $routeParams, 
  $route, cmsService, $location) {
    
    $scope.editCheck = false;

    
    $scope.medDetail = cmsService.getMedDetail($routeParams.medid).then(
      function (med) {
        //$scope.synDetail = syn;
        //alert(syn.get('immediate_consideration'));
        $scope.ind = med.get('indication'); 
        $scope.cau = med.get('caution'); 
        $scope.title = med.get('title');
        $scope.ref = med.get('reference');
        $scope.af = med.get('available_form');
        //$scope.apply();
    });
    
    $scope.checkEdit = function() {
         $scope.editCheck = true;
    };
    
    $scope.updateMed = function () {
      cmsService.updateMedDetail($routeParams.medid, $scope.title, $scope.ind,
      $scope.cau, $scope.af, $scope.ref).then(
        function(){
          $location.path('/medication');
          $scope.$apply();
        }
        //
       
      );
    }
    
    
     
    
    
    // function ngBindHtmlCtrl($scope) {
    //   $scope.myHTML =
    //   'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';
    // }
    
});