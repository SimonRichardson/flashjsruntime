var render = render || {};
render.RemedySVG = RemedyBase.extend({
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
		
        this._.context = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this._.context.setAttribute("version", "1.2");
        this._.context.setAttribute("baseProfile", "tiny");
        
        window.document.body.appendChild(this._.context);
	},
	beginFill: function(color, alpha){
	},
	clear: function(){
	},
	drawRect: function(x, y, width, height){
	},
	drawCircle: function(x, y, radius){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("cx", x);
		circle.setAttribute("cy", y);
		circle.setAttribute("r", radius);
		circle.setAttribute("fill", "#ffff00");
		
		this._.context.appendChild(circle);
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