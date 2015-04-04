angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

	$scope.link = {};

	$scope.addLink = function(){
		Links.addLink($scope.link)
		  .then(function(link){
		  	// $scope.link
		  })
		  .catch(function(error){
		  	console.error(error);
		  });
	};
});
