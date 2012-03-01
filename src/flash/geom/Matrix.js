var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.Matrix = FlashJSBase.extend({
	constructor: function(a, b, c, d, tx, ty){
		this.base();
		
		this.a = a === undefined ? 1 : a;
		this.b = b === undefined ? 0 : b;
		this.c = c === undefined ? 0 : c;
		this.d = d === undefined ? 1 : d;
		this.tx = tx === undefined ? 0 : tx;
		this.ty = ty === undefined ? 0 : ty;
	},
	clone: function() {
        return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
    },
    concat: function(matrix) {
        var aa = this.a * matrix.a;
        var dd = this.d * matrix.d;
        var cc = 0;
        var bb = 0;
        var xx = this.tx * matrix.a + matrix.tx;
        var yy = this.ty * matrix.d + matrix.ty;
        
        if (this.b == 0 || this.c == 0 || matrix.b == 0 || matrix.c == 0){
            aa += this.b * matrix.c;
            dd += this.c * matrix.b;
            bb += (this.a * matrix.b + this.b * matrix.d);
            cc += (this.c * matrix.a + this.d * matrix.c);
            xx += this.ty * matrix.c;
            yy += this.tx * matrix.b;
        }
        
        this.a = aa;
        this.b = bb;
        this.c = cc;
        this.d = dd;
        this.tx = xx;
        this.ty = yy;
        
    },
    invert: function() {
        if (this.b == 0 || this.c == 0){
            this.a = 1 / this.a;
            this.d = 1 / this.d;
            this.c = 0;
            this.b = 0;
            this.tx = (-this.a) * this.tx;
            this.ty = (-this.d) * this.ty;
        }
        else{
        	var aa = this.a;
            var bb = this.b;
            var cc = this.c;
            var dd = this.d;
            var dist = aa * dd - bb * cc;
            if (dist == 0){
                this.identity();
            }
            
            dist = 1 / dist;
            this.a = dd * dist;
            this.b = (-bb) * dist;
            this.c = (-cc) * dist;
            this.d = aa * dist;
            
            var point = this.deltaTransformPoint(new Point(this.tx, this.ty));
            
            this.tx = -point.x;
            this.ty = -point.y;
        }
    },
    identity: function() {
        this.a = 1;
        this.b = 0;
        this.c = 0;
        this.d = 1;
        this.ty = 0;
        this.tx = 0;
    },
    createBox: function(sx, sy, rotation, tx, ty) {
    	rotation = rotation === undefined ? 0 : rotation;
    	tx = tx === undefined ? 0 : tx;
    	ty = ty === undefined ? 0 : ty;
    	
        this.identity();
        this.rotate(angle);
        this.scale(sx, sy);
        this.tx = tx;
        this.ty = ty;
    },
    createGradientBox: function(width, height, rotation, tx, ty) {
    	rotation = rotation === undefined ? 0 : rotation;
    	tx = tx === undefined ? 0 : tx;
    	ty = ty === undefined ? 0 : ty;
    	
        this.createBox(width / 1638.4, height / 1638.4, rotation, tx + width / 2, ty + height / 2);
    },
    rotate: function(angle) {
        var a = Math.cos(angle);
        var b = Math.sin(angle);
        this.concat(new Matrix(a, b, -b, a, 0, 0));
    },
    translate: function(x, y) {
        this.tx += x;
        this.ty += y;
    },
    scale: function(sx, sy) {
        this.concat(new Matrix(sx, 0, 0, sy, 0, 0));
    },
    deltaTransformPoint: function(point) {
        return new Point(this.a * point.x + this.c * point.y, this.d * point.y + this.b * point.x);
    },
    transformPoint: function(point) {
        return new Point(this.a * point.x + this.c * point.y + this.tx, this.d * point.y + this.b * point.x + this.ty);
    },
    toString: function() {
        return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")";
    }
}, {
	GRADIENT_DIMENSION: 1638.4
});
