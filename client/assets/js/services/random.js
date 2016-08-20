angular.module('application').factory('random', function() {
	return function(data) {
		var results = [];
		for (var i = 0; i < data.howMany; i++) {
			var generated = data.from + Math.random()*(data.to - data.from);
			generated = Number( generated.toFixed(data.digits) );
			results.push({number: generated});
		}
		if (data.sort) {
			results = results.sort(function(row1, row2) {
				return row1.number - row2.number;
			});
		}
		return results;
	};
});