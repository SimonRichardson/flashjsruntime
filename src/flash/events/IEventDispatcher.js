var flash = flash || {};
flash.events = flash.events || {};
flash.events.IEventDispatcher = FlashJSBase.extend({
	addEventListener: function(type, listener, useCapture, priority, useWeakReference) {
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
		namespace: new FlashJSNamespace('flash', 'events', 'IEventDispatcher'),
		isInterface: true
	}
});