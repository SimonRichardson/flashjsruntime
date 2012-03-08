var flash = flash || {};
flash.events = flash.events || {};
flash.events.IEventDispatcher = FlashObject.extend({
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
		namespace: new RemedyNamespace('flash', 'events', 'IEventDispatcher'),
		metadata: {
			isInterface: true
		}
	}
});