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
		var circle = window.document.createElement('div');
		circle.id = "DIV";
		circle.style.left = (x - radius) + 'px';
		circle.style.top = (y - radius) + 'px';
		circle.style.width = (radius * 2) + 'px';
		circle.style.height = (radius * 2) + 'px';
		circle.style.backgroundColor = '#ff00ff';
		circle.style['-moz-border-radius'] = radius + 'px';
		circle.style['-webkit-border-radius'] = radius + 'px';
		window.document.body.appendChild(circle);
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