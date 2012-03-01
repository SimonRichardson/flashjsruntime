var FlashJSNamespace = Base.extend({
	constructor: function() {
		this.namespace = Array.prototype.slice.call(arguments);
		this.className = this.namespace.pop();
	},
	getClassName: function() {
		return this.className;
	},
	getFullPath: function() {
		return this.namespace.join(".") + "." + this.className;
	}, 
	toString: function() {
		return this.namespace.join(".") + "::" + this.className;
	}
});