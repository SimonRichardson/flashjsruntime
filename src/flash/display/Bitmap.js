var flash = flash || {};
flash.display = flash.display || {};
flash.display.Bitmap = flash.display.DisplayObject.extend({
	constructor: function(){
		flash.display.DisplayObject.properties.lock = false;
		this.base();
		flash.display.DisplayObject.properties.lock = true;
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'Bitmap')
	}
});