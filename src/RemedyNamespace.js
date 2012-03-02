var FlashJSNamespace = Base.extend({
	constructor: function() {
		this.namespace = Array.prototype.slice.call(arguments);
		this.className = this.namespace.pop();
		// Cache
		this.qname = this.namespace.join(".") + "." + this.className;
		this.path = this.namespace.join(".") + "::" + this.className;
	},
	getClassName: function() {
		return this.className;
	},
	getQualifiedName: function() {
		return this.qname;
	}, 
	toString: function() {
		return this.path;
	}
});