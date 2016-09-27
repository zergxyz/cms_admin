
var cmsApp = angular.module('cmsApp' , ['ngResource','ngRoute','ui.bootstrap', 'textAngular' ]);

cmsApp
    .config(cmsRouter)

function cmsRouter ($routeProvider)
{
    $routeProvider.
        when('/', {
            controller: 'authenticationController',
            templateUrl: 'views/authenticationView.html'
        }).
          when('/home', {
            templateUrl: 'views/home.html'
        }).
        
        //syn
        when('/syndrome', {
            controller: 'synlistController',
            templateUrl: 'views/synlist.html'
        }).
        when('/syndrome/:synid', {
            controller: 'syndetailController',
            templateUrl: 'views/syndetail.html'
        }).
        when('/synadd', {
            controller: 'synaddController',
            templateUrl: 'views/synadd.html'
        }).
        
        // //meds
        //  when('/medication', {
        //     controller: 'medlistController',
        //     templateUrl: 'views/medlist.html'
        // }).
        // when('/med/:medid', {
        //     controller: 'meddetailController',
        //     templateUrl: 'views/meddetail.html'
        // }).
        // when('/medadd', {
        //     controller: 'medaddController',
        //     templateUrl: 'views/medadd.html'
        // }).
        
        
        //  //interventions
        //  when('/intervention', {
        //     controller: 'intelistController',
        //     templateUrl: 'views/intelist.html'
        // }).
        // when('/inte/:inteid', {
        //     controller: 'intedetailController',
        //     templateUrl: 'views/intedetail.html'
        // }).
        // when('/inteadd', {
        //     controller: 'inteaddController',
        //     templateUrl: 'views/inteadd.html'
        // }).
        
        
        
        otherwise({
            redirectTo: '/'
        });
}





    

    


