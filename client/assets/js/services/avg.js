angular.module('application').factory('avg', function(sum) {
	return function(array) {
		return sum(array) / array.length;
	};
});