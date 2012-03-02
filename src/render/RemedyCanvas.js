var render = render || {};
render.RemedyCanvas = RemedyBase.extend({
	constructor: function(){
		this.base();
		
		var scope = this;
		
		this._.isRunning = false;
		
		this.define('isRunning', {
			get: function(){ return scope._.isRunning; }
		});
	},
	start: function(){
		this._.isRunning = true;
		
		var canvas = window.document.createElement('canvas');
		canvas.id = "RemedyCanvas";
		canvas.width = 500;
		canvas.height = 450;
		window.document.body.appendChild(canvas);
		
		this.context = canvas.getContext('2d');
	},
	beginFill: function(color, alpha){
		this.context.fileStyle = utils.ColorUtils.hexToCanvasRgba(color, alpha);
	},
	clear: function(){
		this.context.clear();
	},
	drawRect: function(x, y, width, height){
		this.context.drawRect(x, y, width, height);
	},
	drawCircle: function(x, y, radius){
		this.context.beginPath();
		this.context.arc(x, y, radius, 0, Math.PI*2, true);
		this.context.closePath();
		this.context.fill();
	},
	drawEllipse: function(x, y, width, height){
	},
	lineTo: function(x, y){
	},
	moveTo: function(x, y){
	},
	endFill: function(){
		
	}
});