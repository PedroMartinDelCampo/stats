angular.module('application').factory('sum', function() {
	return function(array) {
		return array.reduce(function(a, b) {
			return a + b;
		}, 0);
	};
});