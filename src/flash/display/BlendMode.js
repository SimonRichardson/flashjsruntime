var flash = flash || {};
flash.display = flash.display || {};
flash.display.BlendMode = FlashObject.extend({
	constructor: function(){
		this.base();
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'BlendMode')
	},
	NORMAL: "normal",
	LAYER: "layer",
	MULTIPLY: "multiply",
	SCREEN: "screen",
	LIGHTEN: "lighten",
	DARKEN: "darken",
	ADD: "add",
	SUBTRACT: "subtract",
	DIFFERENCE: "difference",
	INVERT: "invert",
	OVERLAY: "overlay",
	HARDLIGHT: "hardlight",
	ALPHA: "alpha",
	ERASE: "erase",
	SHADER: "shader"
});