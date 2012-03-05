/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	var proto = new this;
	
	extend.call(proto, _instance);
    proto.base = function() {
      // call this method from any other method to invoke that method's ancestor
    };
	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] != null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		return (type == "object") ? klass : constructor.valueOf();
	};
	
	// Reflection API
	if(!this.prototype.reflection) {
		this.prototype.reflection = {};
	}
	
	klass.prototype.reflection = reflection = {};
	for(var i in this.prototype.reflection) {
		reflection[i] = this.prototype.reflection[i];
	}
	
	reflection.ancestor = this;
	if(!('namespaces' in reflection)) {
		reflection.namespaces = [];
	} else {
		// Clean up the namespaces from the ancestors
		var list = [];
		var ancestorNamespaces = reflection.namespaces.slice(0);
		var total = ancestorNamespaces.length;
		for(var i=0; i<total; i++) {
			var index = -1;
			for(var j=0; j<list.length; j++) {
				if(list[j].toString() === ancestorNamespaces[i].toString()) {
					index = j;
				}
			}
			if(index < 0) {
				list.push(ancestorNamespaces[i]);
			}
		}
		reflection.namespaces = list;
	}
	
	if(!('metadata' in reflection)) {
		reflection.metadata = {};
	}
	
	if(_static && 'reflection' in _static) {
		var staticReflection = _static.reflection || {};
		var namespace = staticReflection.namespace;
		var metadata = staticReflection.metadata || {};
		
		if(klass.ancestor.reflection && 'metadata' in klass.ancestor.reflection) {
			if('accessors' in klass.ancestor.reflection.metadata) {
				metadata.accessors = metadata.accessors || {};
				for(var i in klass.ancestor.reflection.metadata.accessors) {
					metadata.accessors[i] = klass.ancestor.reflection.metadata.accessors[i];
				}
			}
		}
		
		reflection.metadata = metadata;
		reflection.namespace = namespace;
		reflection.namespaces.push(namespace);
		
		if(window.RemedyAVM) {
			RemedyAVM.addStaticDefinition(namespace.getQualifiedName(), klass);
		}
		
		staticReflection.ancestor = reflection.ancestor;
		staticReflection.namespaces = reflection.namespaces;
		staticReflection.metadata = metadata;
	}
	
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init(klass);
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		// Merge namespaces		
		var ns = this.prototype.reflection.namespace;
		var nss = this.prototype.reflection.namespaces;
		var isInterface = this.prototype.reflection.isInterface;
		
		var total = arguments.length;
		for(var i=0; i<total; i++){
			var klass = arguments[i];
			// check it implements the interface correctly
			if(!isInterface) {
				var klassNs = klass.prototype.reflection.namespace;
				for(var k in klass.prototype) {
					if(!(k in this.prototype)) {
						var interfaceName = klassNs.toString();
						var instanceName = ns.toString();
						throw new Error('Interface method ' + k + ' in namespace ' + interfaceName + 
										' not implemented by class ' + instanceName + '.');
					}
				}
			}
			
			// Update namespaces
			var klassNss = klass.prototype.reflection.namespaces;
			var klassNssTotal = klassNss.length;
			for(var j=0; j<klassNssTotal; j++) {
				nss.push(klassNss[j]);
			}
		}
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});