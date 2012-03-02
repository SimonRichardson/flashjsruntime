var flash = flash || {};
flash.display = flash.display || {};
flash.display.Stage = flash.display.DisplayObjectContainer.extend({
	constructor: function(){
		this.base();
		
		var scope = this;
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'Stage')
	},
	create: function(){
		flash.display.DisplayObject.properties.lock = false;
		var stage = new flash.display.Stage();
		flash.display.DisplayObject.properties.lock = true;
		return stage;
	}
});