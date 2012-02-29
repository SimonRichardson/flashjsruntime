var flash = flash || {};
flash.events = flash.events || {};
flash.events.EventDispatcher = FlashJSBase.extend({
	constructor: function() {
		this.base();
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'events', 'EventDispatcher')
	}
});
flash.events.EventDispatcher.implement(flash.events.IEventDispatcher);
