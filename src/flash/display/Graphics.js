var flash = flash || {};
flash.display = flash.display || {};
flash.display.Graphics = FlashObject.extend({
	constructor: function(context){
		this.base();
		
		this._.context = context;
		this._.renderer = RemedyAVM.getRenderer();
	},
	beginFill: function(color, alpha){
		alpha = alpha === undefined ? 1.0 : alpha;
		
		this._.renderer.beginFill(color, alpha);
	},
	clear: function(){
		this._.renderer.clear();
	},
	drawRect: function(x, y, width, height){
		this._.renderer.drawRect(x, y, width, height);
	},
	drawCircle: function(x, y, radius){
		this._.renderer.drawCircle(x, y, radius);
	},
	drawEllipse: function(x, y, width, height){
		this._.renderer.drawEllipse(x, y, width, height);
	},
	lineTo: function(x, y){
		this._.renderer.lineTo(x, y);
	},
	moveTo: function(x, y){
		this._.renderer.moveTo();
	},
	endFill: function(){
		this._.renderer.endFill();
	},
	beginBitmapFill: function(bitmap, matrix, repeat, smooth){
		matrix = matrix === undefined ? null : matrix;
		repeat = repeat === undefined ? true : repeat;
		smooth = smooth === undefined ? false : smooth;
	},
	beginGradientFill: function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio){
		matrix = matrix === undefined ? null : matrix;
		spreadMethod = spreadMethod === undefined ? "pad" : spreadMethod;
		interpolationMethod = interpolationMethod === undefined ? "rgb" : interpolationMethod;
		focalPointRatio = focalPointRatio === undefined ? 0 : focalPointRatio;
	},
	beginShaderFill: function(shader, matrix){
		matrix = matrix === undefined ? null : matrix;
	},
	copyFrom: function(sourceGraphics){
		
	},
	curveTo: function(controlX, controlY, anchorX, anchorY){
		
	},
	drawGraphicsData: function(graphicsData){
		
	},
	drawPath: function(commands, data, winding){
		winding = winding === undefined ? "evenOdd" : winding;
	},
	
	drawRoundRect: function(x, y, width, height, ellipseWidth, ellipseHeight){
		ellipseHeight = ellipseHeight === undefined ? ellipseWidth : ellipseHeight;
	},
	drawRoundRectComplex: function(x, y, width, height, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius){
		
	},
	drawTriangles: function(vertices, indices, uvtData, culling){
		indices = indices === undefined ? null : indices;
		uvtData = uvtData === undefined ? null : uvtData;
		culling = culling === undefined ? "none" : culling;
	},
	lineBitmapStyle: function(bitmap, matrix, repeat, smooth){
		matrix = matrix === undefined ? null : matrix;
		repeat = repeat === undefined ? true : repeat;
		smooth = smooth === undefined ? false : smooth;
	},
	lineGradientStyle: function(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio){
		matrix = matrix === undefined ? null : matrix;
		spreadMethod = spreadMethod === undefined ? "pad" : spreadMethod;
		interpolationMethod = interpolationMethod === undefined ? "rgb" : interpolationMethod;
		focalPointRatio = focalPointRatio === undefined ? 0 : focalPointRatio;
	},
	lineShaderStyle: function(shader, matrix){
		matrix = matrix === undefined ? null : matrix;
	},
	lineStyle: function(thickness, color, alpha, pixelHinting, scaleMode, caps, joints, miterLimit){
		thickness = thickness === undefined ? null : thickness;
		color = color === undefined ? 0 : color;
		alpha = alpha === undefined ? 1.0 : alpha;
		pixelHinting = pixelHinting === undefined ? false : pixelHinting;
		scaleMode = scaleMode === undefined ? "normal" : scaleMode;
		caps = caps === undefined ? null : caps;
		joints = joints === undefined ? null : joints;
		miterLimit = miterLimit === undefined ? 3 : miterLimit;
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'Graphics')
	}
});