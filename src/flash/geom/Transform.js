var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.Transform = RemedyBase.extend({
	constructor: function(displayObject){
		this.base();
		
		var scope = this;
		
		this._.displayObject = displayObject;
		this._.matrix = null;
		this._.colorTransform = null;
		this._.concatenatedMatrix = null;
		this._.concatenatedColorTransform = null;
		this._.pixelBounds = null;
		this._.matrix3D = null;
		this._.perspectiveProjection = null;
		
		this.define('matrix', {
			get: function(){ return scope._.matrix; },
			set: function(value) { scope._.matrix = value; }
		});
		this.define('colorTransform', {
			get: function(){ return scope._.colorTransform; },
			set: function(value) { scope._.colorTransform = value; }
		});
		this.define('concatenatedMatrix', {
			get: function(){ return scope._.concatenatedMatrix; }
		});
		this.define('concatenatedColorTransform', {
			get: function(){ return scope._.concatenatedColorTransform; }
		});
		this.define('pixelBounds', {
			get: function(){ return scope._.pixelBounds; }
		});
		this.define('matrix3D', {
			get: function(){ return scope._.matrix3D; },
			set: function(value) { scope._.matrix3D = value; }
		});
		this.define('perspectiveProjection', {
			get: function(){ return scope._.perspectiveProjection; },
			set: function(value) { scope._.perspectiveProjection = value; }
		});
	},
	getRelativeMatrix3D: function(relativeTo) {
		return null;
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'geom', 'Transform')
	}
});