var flash = flash || {};
flash.display = flash.display || {};
flash.display.DisplayObject = EventDispatcher.extend({
	constructor: function(){
		this.base();
	}
});