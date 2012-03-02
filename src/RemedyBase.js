var FlashJSBase = Base.extend({
	constructor: function() {
		this.base();
		this._ = {};
		this.__getHash__ = {};
		this.__setHash__ = {};
	},
	trace: function() {
		trace.apply(null, arguments);
	},
	define: function(name, props) {
		var method,
			cname;
		
		if('get' in props) {
			cname = 'get';
			method = props['get'];
			if(FlashJSBase.nativeGetter) {
				this.__defineGetter__(name, utils.bind(this, method));
			} else {
				cname += StringUtils.capitalise(name);
				this[cname] = utils.bind(this, method);
			}
			this.__getHash__[name] = cname;
		}
		
		if('set' in props) {
			cname = 'set';
			method = props['set'];
			if(FlashJSBase.nativeSetter) {
				this.__defineSetter__(name, utils.bind(this, method));
			} else {
				cname += StringUtils.capitalise(name);
				this.__setHash__[name] = cname;
				this[cname] = utils.bind(this, method);
			}
			this.__setHash__[name] = cname;
		}
	},
	get: function(name) {
		if(name in this.__getHash__) {
			if(FlashJSBase.nativeGetter) {
				return this[name];				
			} else {
				this[this.__getHash__[name]]();
			}
		} else {
			throw new ReferenceError("Property " + name + " not found on " + 
									 this.reflection.namespace.getFullPath() + " ant there is " +
									 "no default value", 1069);
		}
	},
	set: function(name, value) {
		if(name in this.__setHash__) {
			if(FlashJSBase.nativeGetter) {
				this[name] = value;				
			} else {
				this[this.__setHash__[name]](value);
			}
		} else {
			throw new ReferenceError("Property " + name + " not found on " + 
					 this.reflection.namespace.getFullPath() + " ant there is " +
					 "no default value", 1069);
		}
	},
	toString: function() {
		return "[object " + this.reflection.namespace.getClassName() + "]";
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('Object')
	},
	init: function(klass) {
		klass.nativeGetter = ('__defineGetter__' in this);
		klass.nativeSetter = ('__defineSetter__' in this);
	}
});