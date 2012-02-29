var FlashJSNamespace = Base.extend({
	constructor: function() {
		this.namespace = Array.prototype.slice.call(arguments);
		this.className = this.namespace.pop();
	},
	getClassName: function() {
		return this.namespace[this.namespace.length - 1];
	},
	getFullPath: function() {
		return this.namespace.join(".") + "." + this.className;
	}, 
	toString: function() {
		return this.namespace.join(".") + "::" + this.className;;
	}
});