var flash = flash || {};
flash.display = flash.display || {};
flash.display.Shape = flash.display.DisplayObject.extend({
	constructor: function(){
		flash.display.DisplayObject.properties.lock = false;
		this.base();
		flash.display.DisplayObject.properties.lock = true;
		
		var scope = this;
		
		this._.graphics = new flash.display.Graphics(this);
		
		this.define('graphics', {
			get: function(){ return scope._.graphics; }
		});
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'Shape')
	}
});