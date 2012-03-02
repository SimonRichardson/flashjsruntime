var flash = flash || {};
flash.display = flash.display || {};
flash.display.Graphics = FlashJSBase.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'Graphics')
	}
});