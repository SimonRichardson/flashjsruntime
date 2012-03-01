var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.Point = FlashJSBase.extend({
	constructor: function(x, y){
		this.base();
		
		this.x = x == undefined ? 0 : x;
		this.y = y == undefined ? 0 : y;
		
		this.define('length', {
			get: function() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		});
	},
	clone: function(){
		return new Point(this.x, this.y);
	},
	offset: function(x, y){
        this.x = this.x + x;
        this.y = this.y + y;
    },
    equals: function(point){
        return (point.x == this.x &&  point.y == this.y);
    },
    subtract: function(point){
        return new Point(this.x - point.x, this.y - point.y);
    },
    add: function(point){
        return new Point(this.x + point.x, this.y + point.y);
    },
    normalize: function(value){
        var l = this.get('length');
        if (l > 0){
            l = value / l;
            this.x *= l;
            this.y *= l;
        }
    },
    toString: function(){
        return "(x=" + this.x + ", y=" + this.y + ")";
    }
}, {
	interpolate: function(point1, point2, f) {
        return new Point(point2.x + f * (point1.x - point2.x), point2.y + f * (point1.y - point2.y));
    },
    distance: function(point1, point2) {
        return point1.subtract(point2).length;
    },
    polar: function(point1, point2) {
        return new Point(point1 * Math.cos(point2), point1 * Math.sin(point2));
    }
});     