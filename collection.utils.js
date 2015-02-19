/**
 * Turns an array of objects into an object whose values are the elements of the array
 * and the keys are the values of the properties "property" of each element.
 * E.g.: 
 * 	var arr = [{name: 'Val', id: 1, color: 'green'}, {name: 'Jeff', id: 7, color: 'blue'}, {name: 'Mike', id: 3, color: 'red'}]
 * 	arr.toMap('name'); // returns {'Val': {name: 'Val', id: 1, color: 'green'}, 
 * 					   // 'Jeff': {name: 'Jeff', id: 7, color: 'blue'}, 'Mike': {name: 'Mike', id: 3, color: 'red'}
 */
if (typeof Array.prototype.toMap != 'function') {
	Array.prototype.toMap = function (property){
		var out = {};
		for (var i = 0; i < this.length; i++) {
			if (property in this[i]) {
				out[this[i][property]] = this[i];
			}
		}
	    return out;
	};
}

/**
 * Given an array of numbers, such as [5,3,6,1], sorts it, 
 * and finds the first available integer greater than or equal to "start" (which defaults to 1);
 * WARNING: passed in array will be sorted in ascending order.
 * @author Val Schuman
 */
if (typeof Array.prototype.findIntegerGap != 'function') {
	Array.prototype.findIntegerGap = function(start) {
		if (!start && start !== 0) {
			start = 1;
		}
		this.sort();
		if (this.length === 0 || start < this[0] || start > this[this.length - 1]) {
			return start;
		}
		for (var i = 0; i < this.length; i++) {
			var nextNum = this[i] + 1;
			if (i + 1 == length) {
				return nextNum;
			}
			
			if (start < nextNum && nextNum < this[i + 1]) {
				return nextNum;
			}
		}
	};
}