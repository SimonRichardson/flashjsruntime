var flash = flash || {};
flash.geom = flash.geom || {};
flash.geom.Rectangle = FlashJSBase.extend({
	constructor: function(x, y, width, height){
		this.base();
		
		var scope = this;
		
		this.x = x == undefined ? 0 : x;
		this.y = y == undefined ? 0 : y;
		this.width = width == undefined ? 0 : width;
		this.height = height == undefined ? 0 : height;
		
		this.define('left', {
			get: function(){
				return scope.x;
			},
			set: function(value){
				scope.width = scope.width + (scope.x - value);
				scope.x = value;
			}
		});
		this.define('right', {
			get: function(){
				return scope.x + scope.width;
			},
			set: function(value){
				scope.width = value - scope.x;
			}
		});
		this.define('top', {
			get: function(){
				return scope.y;
			},
			set: function(value){
				scope.height = scope.height + (scope.y - value);
				scope.y = value;
			}
		});
		this.define('bottom', {
			get: function(){
				return scope.y + scope.height;
			},
			set: function(value){
				scope.height = value - scope.y;
			}
		});
		this.define('topLeft', {
			get: function(){
				return new flash.geom.Point(scope.x, scope.y);
			},
			set: function(value){
				scope.width = scope.width + (scope.x - value.x);
				scope.height = scope.height + (scope.y - value.y);
				scope.x = value.x;
				scope.y = value.y;
			}
		});
		this.define('bottomRight', {
			get: function(){
				return new flash.geom.Point(scope.right, scope.bottom);
			},
			set: function(value){
				scope.width = value.x - scope.x;
				scope.height = value.y - scope.y;
			}
		});
		this.define('size', {
			get: function(){
				return new flash.geom.Point(scope.width, scope.height);
			},
			set: function(value){
				scope.width = value.x;
				scope.height = value.y;
			}
		});
	},
	clone: function(){
        return new flash.geom.Rectangle(this.x, this.y, this.width, this.height);
	},
	isEmpty: function(){
        return (this.width <= 0 && this.height <= 0);
    },
    setEmpty: function(){
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    },
    inflate: function(dx, dy){
        this.x -= dx;
        this.width += 2 * dx;
        this.y -= dy;
        this.height += 2 * dy;
    },
    inflatePoint: function(point){
        this.x -= point.x;
        this.width += 2 * point.x;
        this.y -= point.y;
        this.height += 2 * point.y;
    },
    offset: function(dx, dy){
        this.x += dx;
        this.y += dy;
    },
    offsetPoint: function(point){
        this.x += point.x;
        this.y += point.y;
    },
    contains: function(dx, dy){
        return (dx >= this.x && dx < this.x + this.width) && (dy >= this.y && dy < this.y + this.height);
    },
    containsPoint: function(point){
        return (point.x >= this.x && point.x < this.x + this.width) && (point.y >= this.y && point.y < this.y + this.height);
    },
    containsRect: function(rect){
        var rw0 = rect.x + rect.width;
        var rh0 = rect.y + rect.height;
        var rw1 = this.x + this.width;
        var rh1 = this.y + this.height;
        return (rect.x >= this.x && rect.x < rw1 && rect.y >= this.y && rect.y < rh1) &&
        		(rw0 > this.x && rw0 <= rw1 && rh0 > this.y && rh0 <= rh1);
    },
    intersection: function(rect){
        var result = new flash.geom.Rectangle();
        if (!this.isEmpty()){
            this.isEmpty();
        }
        if (rect.isEmpty()){
        	result.setEmpty();
            return result;
        }
        result.x = Math.max(this.x, rect.x);
        result.y = Math.max(this.y, rect.y);
        result.width = Math.min(this.x + this.width, rect.x + rect.width) - result.x;
        result.height = Math.min(this.y + this.height, rect.y + rect.height) - result.y;
        if(result.width <= 0 || result.height <= 0){
        	result.setEmpty();
        }
        return result;
    },
    intersects: function(rect){
        if (!this.isEmpty()){
            this.isEmpty();
        }
        if (rect.isEmpty()){
            return false;
        }
        var dx = Math.max(this.x, rect.x);
        var dy = Math.max(this.y, rect.y);
        var dw = Math.min(this.x + this.width, rect.x + rect.width) - dx;
        var dh = Math.min(this.y + this.height, rect.y + rect.height) - dy;
        return !(dw <= 0 || dh <= 0);
    },
    union: function(rect){
        if (this.isEmpty()){
            return rect.clone();
        }
        if (rect.isEmpty()){
            return this.clone();
        }
        var result = new flash.geom.Rectangle();
        result.x = Math.min(this.x, rect.x);
        result.y = Math.min(this.y, rect.y);
        result.width = Math.max(this.x + this.width, rect.x + rect.width) - result.x;
        result.height = Math.max(this.y + this.height, rect.y + rect.height) - result.y;
        return result;
    },
    equals: function(rect){
        return (rect.x == this.x && rect.y == this.y) && (rect.width == this.width && rect.height == this.height);
    },
    toString: function() {
        return "(x=" + this.x + ", y=" + this.y + ", w=" + this.width + ", h=" + this.height + ")";
    }
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'geom', 'Rectangle')
	}
});