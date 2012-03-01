var flash = flash || {};
flash.events = flash.events || {};
flash.events.EventDispatcher = FlashJSBase.extend({
	constructor: function(target) {
		this.base();
		this._.target = target;
		this._.hash = {};
		this._.defer = [];
		this._.dispatching = false;
	},
	addEventListener: function(type, listener, useCapture, priority, useWeakReference) {
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/addEventListener().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		if(null == listener) throw new TypeError('Parameter listener must be non-null.', 2007);
		
		var list = (type in this._.hash) ? this._.hash[type] : [];
		
		var eventListener = new flash.events.EventDispatcher.EventListener(type, listener, useCapture, priority);
		eventListener.method = utils.bind(this._.target, listener);
		
		list.push(eventListener);
		list.sort(flash.events.EventDispatcher.sort);
		
		this._.hash[type] = list;
	},
	dispatchEvent: function(event){
		this._.dispatching = true;
		
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/dispatchEvent().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == event) throw new TypeError('Cannot access a property or method of a ' + 
											  'null object reference.', 1009);
		
		var list = this._.hash[event.get('type')];
		
		var index = list.length;
		while(--index > -1) {
			var listener = list[index];
			if(!listener.removed) {
				listener.method(event);
			}
		}
		
		// Remove items when
		var defer = this._.defer;
		
		index = defer.length;
		while(--index > -1) {
			var loc = list.indexOf(defer[index]);
			if(loc < 0) {
				throw new IllegalOperationError();
			} else {
				list.splice(loc, 1);
			}
		}
		
		defer.length = 0;
		
		this._.dispatching = false;
	},
	hasEventListener: function(type){
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/hasEventListener().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		return this._.hash[type] !== undefined;
	},
	removeEventListener: function(type, listener, useCapture){
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/removeEventListener().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		if(null == listener) throw new TypeError('Parameter listener must be non-null.', 2007);
		
		useCapture = useCapture ? true : false;
		
		var list = this._.hash[type];
		
		var index = list.length;
		while(--index > -1) {
			var eventListener = list[index];
			if(eventListener.listener === listener && eventListener.useCapture === useCapture) {
				if(this._.dispatching) {
					eventListener.removed = true;
					this._.defer.push(eventListener);
				} else {
					list.splice(index, 1);
				}
			}
		}
	},
	willTrigger: function(type){
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/willTrigger().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		var ancestor = this.reflection.ancestor.prototype;
		if(is(ancestor, flash.events.IEventDispatcher)) {
			return ancestor.willTrigger(type);
		}
		
		return this._.hash[type] !== undefined;
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'events', 'EventDispatcher')
	},
	init: function(klass) {
		klass.sort = function(a, b){
			return a.priority - b.priority;
		};
		klass.EventListener = function(type, listener, useCapture, priority) {
			this.type = type;
			this.listener = listener;
			this.useCapture = useCapture;
			this.priority = priority;
			this.method = null;
			this.removed = false;
		};
	}
});
flash.events.EventDispatcher.implement(flash.events.IEventDispatcher);
