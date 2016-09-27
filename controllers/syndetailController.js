cmsApp.controller('syndetailController', function ( $scope, $routeParams, 
  $route, cmsService, $location) {
    
    $scope.editCheck = false;
    
    // $scope.myHTML =
    //   'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';
    
    $scope.ic="aaa";
    $scope.title = "";

    
    $scope.disabled = false;
    $scope.menu = [
        ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript'],
        ['format-block'],
        ['font'],
        ['font-size'],
        ['font-color', 'hilite-color'],
        ['remove-format'],
        ['ordered-list', 'unordered-list', 'outdent', 'indent'],
        ['left-justify', 'center-justify', 'right-justify'],
        ['code', 'quote', 'paragraph'],
        ['link', 'image'],
        ['css-class']
    ];

    $scope.cssClasses = ['test1', 'test2'];
    
    cmsService.getSynDetail($routeParams.synid).success(function(syn) {
		    $scope.ic = syn.ic; 
        $scope.mas = syn.mas; 
        $scope.cau = syn.cau; 
        $scope.title = syn.name;
        $scope.ref = syn.ref;
        $scope.algo = "None";
    });
    
    $scope.checkEdit = function() {
         $scope.editCheck = true;
    };
    
    $scope.updateSyn = function () {
      var updatedData = {
        "ic": $scope.ic,
        "mas": $scope.mas,
        "cau": $scope.cau
      }
      cmsService.updateSynDetail($routeParams.synid,updatedData).success(
        function(callback) {
        $location.path('/syndrome');
    });
      // cmsService.updateSynDetail($routeParams.synid, $scope.title, $scope.ic,
      // $scope.mas, $scope.cau, $scope.ref, $scope.algo).then(
      //   function(){
      //     $location.path('/syndrome');
      //     $scope.$apply();
      //   }
      //   //
       
      // );
      // alert('/syndrome/'+$routeParams.synid);
    };
    
    
     
    
    
    // function ngBindHtmlCtrl($scope) {
    //   $scope.myHTML =
    //   'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';
    // }
    
});