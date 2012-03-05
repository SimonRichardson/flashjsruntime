var flash = flash || {};
flash.display = flash.display || {};
flash.display.Sprite = flash.display.DisplayObjectContainer.extend({
	constructor: function(){
		flash.display.DisplayObject.properties.lock = false;
		this.base();
		flash.display.DisplayObject.properties.lock = true;
		
		var scope = this;
		
		this._.buttonMode = false;
		this._.dropTarget = null;
		this._.graphics = new flash.display.Graphics(this);
		this._.hitArea = null;
		this._.soundTransform = null;
		this._.useHandCursor = false;
		
		this.define('buttonMode', {
			get: function(){ return scope._.buttonMode; },
			set: function(value){ scope._.buttonMode = value; }
		});
		this.define('dropTarget', {
			get: function(){ return scope._.dropTarget; }
		});
		this.define('graphics', {
			get: function(){ return scope._.graphics; }
		});
		this.define('hitArea', {
			get: function(){ return scope._.hitArea; },
			set: function(value){ scope._.hitArea = value; }
		});
		this.define('soundTransform', {
			get: function(){ return scope._.soundTransform; },
			set: function(value){ scope._.soundTransform = value; }
		});
		this.define('useHandCursor', {
			get: function(){ return scope._.useHandCursor; },
			set: function(value){ scope._.useHandCursor = value; }
		});
	},
	startDrag: function(lockCenter, bounds) {
		lockCenter = lockCenter === undefined ? false : lockCenter;
		bounds = bounds === undefined ? null : bounds;
	},
	startTouchDrag: function(touchPointID, lockCenter, bounds) {
		lockCenter = lockCenter === undefined ? false : lockCenter;
		bounds = bounds === undefined ? null : bounds;
	},
	stopDrag: function(){
	},
	stopTouchDrag: function(touchPointID){
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'Sprite'),
		metadata: {
			isDynamic: false,
			isFinal: false,
			isStatic: false
		}
	}
});