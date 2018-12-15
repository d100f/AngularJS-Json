var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {

  var request = {
    method: 'get',
    url: 'data/uccelli.json',
    dataType: 'json',
    contentType: "application/json"
  };

  $scope.array_uccelli = new Array;

  $http(request).success(function(jsonData) {
      $scope.array_uccelli = jsonData;
      $scope.list = $scope.array_uccelli;
    })
    .error(function() {

    });
});
