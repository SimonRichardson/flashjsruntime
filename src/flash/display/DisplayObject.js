var flash = flash || {};
flash.display = flash.display || {};
flash.display.DisplayObject = flash.events.EventDispatcher.extend({
	constructor: function(){
		this.base();
		
		this.define("accessibilityProperties");
		this.define("alpha");
		this.define("blendMode");
		this.define("blendShader");
		this.define("cacheAsBitmap");
		this.define("filters");
		this.define("height");
		this.define("loaderInfo");
		this.define("mask");
		this.define("mouseX");
		this.define("mouseY");
		this.define("name");
		this.define("opaqueBackground");
		this.define("parent");
		this.define("root");
		this.define("rotation");
		this.define("rotationX");
		this.define("rotationY");
		this.define("rotationZ");
		this.define("scale9Grid");
		this.define("scaleX");
		this.define("scaleY");
		this.define("scaleZ");
		this.define("scrollRect");
		this.define("stage");
		this.define("transform");
		this.define("visible");
		this.define("width");
		this.define("x");
		this.define("y");
		this.define("z");
	},
	getBounds: function(targetCoordinateSpace){
		
	},
	getRect: function(targetCoordinateSpace){
		
	},
	globalToLocal: function(point){
		
	},
	globalToLocal3D: function(point){
		
	},
	hitTestObject: function(obj){
		
	},
	hitTestPoint: function(x, y, shapeFlag) {
		shapeFlag = shapeFlag === undefined ? false : shapeFlag;
		
	},
	local3DToGlobal: function(point3d){
		
	},
	localToGlobal: function(point){
		
	}
});