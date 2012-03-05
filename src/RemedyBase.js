var RemedyBase = Base.extend({
	constructor: function() {
		this.base();
		this._ = {};
	},
	define: function(name, props) {
		var method,
			previous,
			cname;
		
		var readAccessor = this.reflection.readAccessor || {};
		if('get' in props) {
			value = props['get'];
			if(name in readAccessor) {
				ancestor = readAccessor[name].method;
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
			
			readAccessor[name] = {name:cname, method:value};
		}
		this.reflection.readAccessor = readAccessor;
		
		var writeAccessor = this.reflection.writeAccessor || {};
		if('set' in props) {
			value = props['set'];
			if(name in writeAccessor) {
				ancestor = writeAccessor[name].method;
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
			
			writeAccessor[name] = {name:cname, method:value};
		}
		this.reflection.writeAccessor = writeAccessor;
	},
	get: function(name) {
		if(!this.reflection.readAccessor) {
			this.reflection.readAccessor = {};
		}
		var readAccessor = this.reflection.readAccessor;
		if(name in readAccessor) {
			if(RemedyBase.nativeGetter) {
				return this[name];				
			} else {
				this[readAccessor[name].name]();
			}
		} else {
			throw new ReferenceError("Property " + name + " not found on " + 
									 this.reflection.namespace.getFullPath() + " ant there is " +
									 "no default value", 1069);
		}
	},
	set: function(name, value) {
		if(!this.reflection.writeAccessor) {
			this.reflection.writeAccessor = {};
		}
		var writeAccessor = this.reflection.writeAccessor;
		if(name in writeAccessor) {
			if(RemedyBase.nativeGetter) {
				this[name] = value;				
			} else {
				this[writeAccessor[name].name](value);
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
		namespace: new RemedyNamespace('Object'),
		metadata: {}
	},
	init: function(klass) {
		klass.nativeGetter = ('__defineGetter__' in this);
		klass.nativeSetter = ('__defineSetter__' in this);
	}
});