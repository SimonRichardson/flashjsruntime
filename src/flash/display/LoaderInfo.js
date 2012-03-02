var flash = flash || {};
flash.display = flash.display || {};
flash.display.LoaderInfo = flash.events.EventDispatcher.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'LoaderInfo')
	}
});