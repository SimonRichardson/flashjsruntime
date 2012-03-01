var flash = flash || {};
flash.display = flash.display || {};
flash.display.DisplayObjectContainer = flash.display.DisplayObject.extend({
	constructor: function(){
		this.base();
	}
});