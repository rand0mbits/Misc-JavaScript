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