angular.module('application').controller('aleatorios', function($scope, random) {

	$scope.numbers = {
		howMany: 1,
		from: 0,
		to: 1,
		digits: 0,
		sort: false,
		calculate: function() {
			$scope.numbers.results = random($scope.numbers);
		}
	}

});