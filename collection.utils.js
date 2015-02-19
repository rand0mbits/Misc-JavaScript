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
		if (this[0] != start) {
			return start;
		}
		for (var i = 0; i < this.length; i++) {
			if (i + 1 == length) {
				return this[i] + 1;
			}
			if ((this[i] + 1) < this[i + 1]) {
				return this[i] + 1;
			}
		}
	};
}