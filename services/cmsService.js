cmsApp.factory('cmsService', function ($q, $rootScope, $http) {
    
     var getSynList = function() {
        return $http({
            url: 'http://localhost:8080/adt/cms/syndromes',
            method: 'GET'
          })
          .success(function(results) {
            return results;
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };
      
      var getSynDetail = function(synid) {
        return $http({
            url: 'http://localhost:8080/adt/cms/syndromes/'+synid,
            method: 'GET'
          })
          .success(function(results) {
            return results;
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };
      
      var updateSynDetail = function(synid, data) {
        return $http({
            url: '/'+synid,
            data: data,
            method: 'PUT'
          })
          .success(function(results) {
            return results;
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };
      
      var addSyndrome = function (synToPost) {
          return $http({
            url: 'http://localhost:8080/adt/cms/syndromes',
            data: synToPost,
            method: 'POST'
          })
          .success(function(results) {
            return results;
          })
          .error(function(error) {
            console.log('an error occured', error);
          });
      };
      
      
       // public api
      return {
        getSynList: getSynList,
        getSynDetail:getSynDetail,
        updateSynDetail:updateSynDetail,
        addSyndrome: addSyndrome
      };

});