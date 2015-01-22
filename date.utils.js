// clear time portion of date object
if (typeof Date.prototype.clearTime != 'function') {
	// see below for better implementation!
	Date.prototype.clearTime = function (){
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	};
}

// Date formatting functions
// M/d/yyyy
if (typeof Date.prototype.format != 'function') {
	Date.prototype.format = function () {
		return (
				(this.getMonth() + 1) + "/" +
				(this.getDate()) + "/" + 
				(this.getFullYear())
			);
	};
}

// difference between dates in days
if (typeof Date.prototype.clearTime != 'differenceInDays') {
	// see below for better implementation!
	Date.prototype.differenceInDays = function (secondDate){
		if (!secondDate instanceof Date) {
			return null;
		}
		var timeDiff = this.getTime() - secondDate.getTime(); // in milliseconds
		var dayDiff = Math.round(timeDiff / (1000 * 3600 * 24)); // divide by millis in day
		return dayDiff;
	};
}