cmsApp.controller('intedetailController', function ( $scope, $routeParams, 
  $route, cmsService, $location) {
    
    $scope.editCheck = false;

    
    $scope.inteDetail = cmsService.getInteDetail($routeParams.inteid).then(
      function (inte) {
        $scope.ind = inte.get('indication'); 
        $scope.cau = inte.get('caution'); 
        $scope.title = inte.get('title');
        $scope.ref = inte.get('reference');
        $scope.prd = inte.get('procedure');
    });
    
    $scope.checkEdit = function() {
         $scope.editCheck = true;
    };
    
    $scope.updateInte = function () {
      cmsService.updateInteDetail($routeParams.inteid, $scope.title, $scope.ind,
      $scope.prd, $scope.cau, $scope.ref).then(
        function(){
          $location.path('/intervention');
          $scope.$apply();
        }
        //
       
      );
    }
    
    
     
});