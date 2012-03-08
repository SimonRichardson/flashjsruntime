var flash = flash || {};
flash.events = flash.events || {};
flash.events.EventPhase = FlashObject.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'events', 'EventPhase')
	},
	CAPTURING_PHASE: 1,
	AT_TARGET: 2,
	BUBBLING_PHASE: 3
});