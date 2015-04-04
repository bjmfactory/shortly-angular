angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

	$scope.link = {};

	$scope.addLink = function(){
		$scope.loading = true;
		Links.addLink($scope.link)
		  .then(function(link){
		  	$scope.loading = false;
		  	$location.path('/')

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

req = {
	navLink: {
		vists: 0,
		code: "dfu2038",
		base_url: "localhost:3000"
	}
}