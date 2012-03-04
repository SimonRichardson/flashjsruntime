var RemedyBase = Base.extend({
	constructor: function() {
		this.base();
		this._ = {};
		this.__getHash__ = {};
		this.__setHash__ = {};
	},
	define: function(name, props) {
		var method,
			previous,
			cname;
		
		if('get' in props) {
			value = props['get'];
			if(name in this.__getHash__) {
				ancestor = this.__getHash__[name].method;
				if(ancestor && (typeof value == "function") &&
				   (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				   /\bbase\b/.test(value)) {
					method = value.valueOf();
					
					value = function() {
						previous = this.base || Base.prototype.base;
						this.base = ancestor;
						var returnValue = method.apply(this, arguments);
						this.base = previous;
						return returnValue;
					};
					
					value.valueOf = function(type) {
						return (type == "object") ? value : method;
					};
					value.toString = Base.toString;
				}	
			}
			
			if(RemedyBase.nativeGetter) {
				cname = name;
				this.__defineGetter__(name, value);
			} else {
				cname = 'get' + StringUtils.capitalise(name);
				this[cname] = value;
			}
			this.__getHash__[name] = {name:cname, method:value};
		}
		
		if('set' in props) {
			value = props['set'];
			if(name in this.__setHash__) {
				ancestor = this.__setHash__[name].method;
				if(ancestor && (typeof value == "function") &&
				   (!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				   /\bbase\b/.test(value)) {
					method = value.valueOf();
					
					value = function() {
						previous = this.base || Base.prototype.base;
						this.base = ancestor;
						var returnValue = method.apply(this, arguments);
						this.base = previous;
						return returnValue;
					};
					
					value.valueOf = function(type) {
						return (type == "object") ? value : method;
					};
					value.toString = Base.toString;
				}	
			}
			
			if(RemedyBase.nativeGetter) {
				cname = name;
				this.__defineSetter__(name, value);
			} else {
				cname = 'set' + StringUtils.capitalise(name);
				this[cname] = value;
			}
			this.__setHash__[name] = {name:cname, method:value};
		}
	},
	get: function(name) {
		if(name in this.__getHash__) {
			if(RemedyBase.nativeGetter) {
				return this[name];				
			} else {
				this[this.__getHash__[name].name]();
			}
		} else {
			throw new ReferenceError("Property " + name + " not found on " + 
									 this.reflection.namespace.getFullPath() + " ant there is " +
									 "no default value", 1069);
		}
	},
	set: function(name, value) {
		if(name in this.__setHash__) {
			if(RemedyBase.nativeGetter) {
				this[name] = value;				
			} else {
				this[this.__setHash__[name].name](value);
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
		namespace: new RemedyNamespace('Object')
	},
	init: function(klass) {
		klass.nativeGetter = ('__defineGetter__' in this);
		klass.nativeSetter = ('__defineSetter__' in this);
	}
});