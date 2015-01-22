// hash a string
if (typeof String.prototype.hashCode != 'function') {
	String.prototype.hashCode = function() {
		var hash = 0, i, chr, len;
		if (this.length == 0) return hash;
		for (i = 0, len = this.length; i < len; i++) {
			chr   = this.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
}

// String to CamelCase, conforming to variable naming rules
if (typeof String.prototype.toCamelCase != 'function') {
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
}