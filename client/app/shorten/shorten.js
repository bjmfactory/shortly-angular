angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

	$scope.link = {};

	$scope.addLink = function(){
		Links.addLink($scope.link)
		  .then(function(link){

		  	// $scope.link
		  	/*
		  		var LinkSchema = new mongoose.Schema({
				 visits: Number,
				 link: String,
				 title: String,
				 code: String,
				 base_url: String,
				 url: String
				});
				*/
		  })
		  .catch(function(error){
		  	console.error(error);
		  });
	};
});


// $scope.link on the inside

// $scope.link = {
// 	url: "http://google.com"
// }