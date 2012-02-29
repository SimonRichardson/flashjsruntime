var FlashJSBase = Base.extend({
	constructor: function() {
		this.base();
		this._ = {};
	},
	trace: function() {
		trace.apply(null, arguments);
	},
	toString: function() {
		return "[object " + this.namespace.getClassName() + "]";
	}
}, {
	namespace: new FlashJSNamespace("Object")
});