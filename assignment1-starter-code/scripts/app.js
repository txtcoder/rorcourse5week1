(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchController);

    lunchController.$inject = ['$scope'];
    function lunchController($scope){
        $scope.getMessage=function(){
          if ($scope.lunch == null || $scope.lunch.replace(/,/g, '').trim() == "")
          {
            $scope.message = "Please enter data first";
            $scope.fontcolor = "red";
          } else {
            if ($scope.lunch.split(",").filter(x => x.trim()!="").length<= 3) {
              $scope.message = "Enjoy!";
              $scope.fontcolor = "green";
            }
            else {
              $scope.message = "Too much!";
              $scope.fontcolor = "green";
            }
          }
        };
    };



})();
