var flash = flash || {};
flash.events = flash.events || {};
flash.events.EventDispatcher = FlashJSBase.extend({
	constructor: function(target) {
		this.base();
		this._.target = target;
		this._.hash = {};
	},
	addEventListener: function(type, listener, useCapture, priority, useWeakReference) {
		trace(arguments.length);
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/addEventListener().' +
									'Expected 2, got ' + arguments.length + '.');
		}
		
		var list = (type in this._.hash) ? this._.hash[type] : [];
		
		list.push(new flash.events.EventDispatcher.EventListener(type, listener, useCapture, priority));
		list.sort(flash.events.EventDispatcher.sort);
		
		this._.hash[type] = list;
	},
	dispatchEvent: function(event){
		
	},
	hasEventListener: function(type){
		
	},
	removeEventListener: function(type, listener, useCapture){
		
	},
	willTrigger: function(type){
		
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
		};
	}
});
flash.events.EventDispatcher.implement(flash.events.IEventDispatcher);
