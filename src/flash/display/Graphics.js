var flash = flash || {};
flash.display = flash.display || {};
flash.display.Graphics = FlashJSBase.extend({
	constructor: function(){
		this.base();
		
		this._.renderer = flash.display.Graphics.RENDERER;
	},
	beginBitmapFill: function(bitmap, matrix, repeat, smooth){
		matrix = matrix === undefined ? null : matrix;
		repeat = repeat === undefined ? true : repeat;
		smooth = smooth === undefined ? false : smooth;
	},
	beginFill: function(color, alpha){
		alpha = alpha === undefined ? 1.0 : alpha;
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
	clear: function(){
		
	},
	copyFrom: function(sourceGraphics){
		
	},
	curveTo: function(controlX, controlY, anchorX, anchorY){
		
	},
	drawCircle: function(x, y, radius){
		
	},
	drawEllipse: function(x, y, width, height){
		
	},
	drawGraphicsData: function(graphicsData){
		
	},
	drawPath: function(commands, data, winding){
		winding = winding === undefined ? "evenOdd" : winding;
	},
	drawRect: function(x, y, width, height){
		
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
	endFill: function(){
		
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
	},
	lineTo: function(x, y){
		
	},
	moveTo: function(x, y){
		
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'Graphics')
	},
	RENDERER: avm.renderer
});