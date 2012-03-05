var RemedyNamespace = Base.extend({
	constructor: function() {
		this.namespace = Array.prototype.slice.call(arguments);
		this.className = this.namespace.pop();
		// Cache
		if(this.namespace.length == 0) {
			this.qname = this.className;
			this.path = this.className;
		} else {
			this.qname = this.namespace.join(".") + "." + this.className;
			this.path = this.namespace.join(".") + "::" + this.className;
		}
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