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