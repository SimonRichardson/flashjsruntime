var render = render || {};
render.RemedyDOM = RemedyBase.extend({
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
	},
	beginFill: function(color, alpha){
	},
	clear: function(){
	},
	drawRect: function(x, y, width, height){
	},
	drawCircle: function(x, y, radius){
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