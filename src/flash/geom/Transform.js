var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.Transform = FlashJSBase.extend({
	constructor: function(displayObject){
		this.base();
		
		this._.displayObject = displayObject;
		this._.matrix = null;
		this._.colorTransform = null;
		this._.concatenatedMatrix = null;
		this._.concatenatedColorTransform = null;
		this._.pixelBounds = null;
		this._.matrix3D = null;
		this._.perspectiveProjection = null;
		
		this.define('matrix', {
			get: function(){ return this._.matrix; },
			set: function(value) { this._.matrix = value; }
		});
		this.define('colorTransform', {
			get: function(){ return this._.colorTransform; },
			set: function(value) { this._.colorTransform = value; }
		});
		this.define('concatenatedMatrix', {
			get: function(){ return this._.concatenatedMatrix; }
		});
		this.define('concatenatedColorTransform', {
			get: function(){ return this._.concatenatedColorTransform; }
		});
		this.define('pixelBounds', {
			get: function(){ return this._.pixelBounds; }
		});
		this.define('matrix3D', {
			get: function(){ return this._.matrix3D; },
			set: function(value) { this._.matrix3D = value; }
		});
		this.define('perspectiveProjection', {
			get: function(){ return this._.perspectiveProjection; },
			set: function(value) { this._.perspectiveProjection = value; }
		});
	},
	getRelativeMatrix3D: function(relativeTo) {
		return null;
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'geom', 'Transform')
	}
});