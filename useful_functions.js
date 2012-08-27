
// String to CamelCase, conforming to variable naming rules
String.prototype.toCamelCase = function() {
	// remove all characters that should not be in a variable name
	// as well underscores and numbers from the beginning of the string
	var s = this.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
	// uppercase letters preceeded by a hyphen or a space
	s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function(a,b,c) {
		return c.toUpperCase();
	});
	// uppercase letters following numbers
	s = s.replace(/([0-9]+)([a-zA-Z])/g, function(a,b,c) {
		return b + c.toUpperCase();
	});
	return s;
}

// Date formatting functions
// M/d/yyyy
Date.prototype.format = function () {
	return (
			(this.getMonth() + 1) + "/" +
			(this.getDate()) + "/" + 
			(this.getFullYear())
		);
};

Date.formatLong = function(num) { 
	return new Date(num).format();
};

// String to CamelCase, conforming to variable naming rules
function toCamelCase(s) {
	// remove all characters that should not be in a variable name
	// as well underscores an numbers from the beginning of the string
	s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
	// uppercase letters preceeded by a hyphen or a space
	s = s.replace(/([ -]+)([a-zA-Z0-9])/g, function(a,b,c) {
		return c.toUpperCase();
	});
	// uppercase letters following numbers
	s = s.replace(/([0-9]+)([a-zA-Z])/g, function(a,b,c) {
		return b + c.toUpperCase();
	});
	return s;
}

// tests whether a variable is undefined
function isUndefined(something) {
	if ( typeof something === "undefined" ) return true;
	else return false;
}