var flash = flash || {};
flash.events = flash.events || {};
flash.events.TimerEvent = flash.events.Event.extend({
	constructor: function(type, bubbles, cancelable){
		this.base(type, bubbles, cancelable);
	},
	clone: function() {
		return new TimerEvent(this.type, this.bubbles, this.cancelable);
	},
	toString: function() {
		return this.formatToString('TimerEvent', 'type', 'bubbles', 'cancelable', 'eventPhase');
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'events', 'TimerEvent')
	},
	TIMER: "timer",
	TIMER_COMPLETE: "timerComplete"
});