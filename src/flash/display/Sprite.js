var flash = flash || {};
flash.display = flash.display || {};
flash.display.Sprite = flash.display.DisplayObjectContainer.extend({
	constructor: function(){
		this.base();
	}
});