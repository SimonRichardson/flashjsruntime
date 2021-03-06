var flash = flash || {};
flash.display = flash.display || {};
flash.display.DisplayObject = flash.events.EventDispatcher.extend({
	constructor: function(){
		this.base();
		
		if(flash.display.DisplayObject.properties.lock) {
			throw new ArgumentError(this.reflection.namespace.getClassName() + 
									' class cannot be instantiated.', 2012);
		}
		
		var scope = this;
		
		this._.setRoot = function(root) {
			scope._.root = root;
		};
		this._.setStage = function(stage, child) {
			var event,
				dispatching = false;
			if(stage === undefined || stage === null) {
				dispatching = true;
				event = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE, true);
			} else if(stage !== scope.get('stage')) {
				dispatching = true;
				event = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE, true);
			}
			
			if(dispatching){
				scope._.stage = stage;
				
				event._.setTargets(child, child);
				child.dispatchEvent(event);
			}
		};
		
		this._.createAncestorChain = function() {
			var list = [];
			
			var parent = scope.get('parent');
			while(parent != null) {
				list.push(parent);
				parent = parent.parent;
			}
			
			return list;
		};
		
		// define
		this._.accessibilityProperties = null;
		this._.alpha = 1.0;
		this._.cacheAsBitmap = false;
		this._.blendMode = flash.display.BlendMode.NORMAL;
		this._.blendShader = null;
		this._.filters = [];
		this._.height = 0;
		this._.loaderInfo = new flash.display.LoaderInfo();
		this._.mask = null;
		this._.mouseX = 0;
		this._.mouseY = 0;
		this._.name = "instance" + RemedyAVM.incrementInstances();
		this._.opaqueBackground = null;
		this._.parent = null;
		this._.root = null;
		this._.rotation = 0;
		this._.rotationX = 0;
		this._.rotationY = 0;
		this._.rotationZ = 0;
		this._.scale9Grid = null;
		this._.scaleX = 1;
		this._.scaleY = 1;
		this._.scaleZ = 1;
		this._.scrollRect = null;
		this._.stage = null;
		this._.transform = new flash.geom.Transform(this);
		this._.visible = true;
		this._.width = 0;
		this._.x = 0;
		this._.y = 0;
		this._.z = 0;
		
		this.define("accessibilityProperties", {
			get: function() { return scope._.accessibilityProperties; },
			set: function(value) { scope._.accessibilityProperties = value; }
		});
		this.define("alpha", {
			get: function() { return scope._.alpha; },
			set: function(value) { scope._.alpha = value; }
		});
		this.define("blendMode", {
			get: function() { return scope._.blendMode; },
			set: function(value) { scope._.blendMode = value; }
		});
		this.define("blendShader", {
			set: function(value) { scope._.blendShader = value; }
		});
		this.define("cacheAsBitmap", {
			get: function() { return scope._.cacheAsBitmap; },
			set: function(value) { scope._.cacheAsBitmap = value; }
		});
		this.define("filters", {
			get: function() { return scope._.filters; },
			set: function(value) { scope._.filters = value; }
		});
		this.define("height", {
			get: function() { return scope._.height; },
			set: function(value) { scope._.height = value; }
		});
		this.define("loaderInfo", {
			get: function() { return scope._.loaderInfo; },
			set: function(value) { scope._.loaderInfo = value; }
		});
		this.define("mask", {
			get: function() { return scope._.mask; },
			set: function(value) { scope._.mask = value; }
		});
		this.define("mouseX", {
			get: function() { return scope._.mouseX; }
		});
		this.define("mouseY", {
			get: function() { return scope._.mouseY; }
		});
		this.define("name", {
			get: function() { return scope._.name; },
			set: function(value) { scope._.name = value; }
		});
		this.define("opaqueBackground", {
			get: function() { return scope._.opaqueBackground; },
			set: function(value) { scope._.opaqueBackground = value; }
		});
		this.define("parent", {
			get: function() { return scope._.parent; }
		});
		this.define("root", {
			get: function() { return scope._.root; }
		});
		this.define("rotation", {
			get: function() { return scope._.rotation; },
			set: function(value) { scope._.rotation = value; }
		});
		this.define("rotationX", {
			get: function() { return scope._.rotationX; },
			set: function(value) { scope._.rotationX = value; }
		});
		this.define("rotationY", {
			get: function() { return scope._.rotationY; },
			set: function(value) { scope._.rotationY = value; }
		});
		this.define("rotationZ", {
			get: function() { return scope._.rotationZ; },
			set: function(value) { scope._.rotationZ = value; }
		});
		this.define("scale9Grid", {
			get: function() { return scope._.scale9Grid; },
			set: function(value) { scope._.scale9Grid = value; }
		});
		this.define("scaleX", {
			get: function() { return scope._.scaleX; },
			set: function(value) { scope._.scaleX = value; }
		});
		this.define("scaleY", {
			get: function() { return scope._.scaleY; },
			set: function(value) { scope._.scaleY = value; }
		});
		this.define("scaleZ", {
			get: function() { return scope._.scaleZ; },
			set: function(value) { scope._.scaleZ = value; }
		});
		this.define("scrollRect", {
			get: function() { return scope._.scrollRect; },
			set: function(value) { scope._.scrollRect = value; }
		});
		this.define("stage", {
			get: function() { return scope._.stage; }
		});
		this.define("transform", {
			get: function() { return scope._.transform; },
			set: function(value) { scope._.transform = value; }
		});
		this.define("visible", {
			get: function() { return scope._.visible; },
			set: function(value) { scope._.visible = value; }
		});
		this.define("width", {
			get: function() { return scope._.width; },
			set: function(value) { scope._.width = value; }
		});
		this.define("x", {
			get: function() { return scope._.x; },
			set: function(value) { scope._.x = value; }
		});
		this.define("y", {
			get: function() { return scope._.y; },
			set: function(value) { scope._.y = value; }
		});
		this.define("z", {
			get: function() { return scope._.z; },
			set: function(value) { scope._.z = value; }
		});
	},
	getBounds: function(targetCoordinateSpace){
		
	},
	getRect: function(targetCoordinateSpace){
		
	},
	globalToLocal: function(point){
		
	},
	globalToLocal3D: function(point){
		
	},
	hitTestObject: function(obj){
		
	},
	hitTestPoint: function(x, y, shapeFlag) {
		shapeFlag = shapeFlag === undefined ? false : shapeFlag;
		
	},
	local3DToGlobal: function(point3d){
		
	},
	localToGlobal: function(point){
		
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'DisplayObject'),
		metadata: {
			isFinal: false,
			isDynamic: true,
			isStatic: false,
			accessors: {
				accessibilityProperties: {type:"flash.accessibility.AccessibilityProperties", declaredBy:"flash.display.DisplayObject"},
				alpha: {type:"Boolean", declaredBy:"flash.display.DisplayObject"},
				blendMode: {type:"String", declaredBy:"flash.display.DisplayObject"},
				blendShader: {type:"flash.display.Shader", declaredBy:"flash.display.DisplayObject"},
				cacheAsBitmap: {type:"Boolean", declaredBy:"flash.display.DisplayObject"},
				filters: {type:"Array", declaredBy:"flash.display.DisplayObject"},
				height: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				loaderInfo: {type:"flash.display.LoaderInfo", declaredBy:"flash.display.DisplayObject"},
				mask: {type:"flash.display.DisplayObject", declaredBy:"flash.display.DisplayObject"},
				mouseX: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				mouseY: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				name: {type:"String", declaredBy:"flash.display.DisplayObject"},
				opaqueBackground: {type:"Object", declaredBy:"flash.display.DisplayObject"},
				parent: {type:"flash.display.DisplayObject", declaredBy:"flash.display.DisplayObject"},
				root: {type:"flash.display.DisplayObject", declaredBy:"flash.display.DisplayObject"},
				rotation: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				rotationX: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				rotationY: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				rotationZ: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				scale9Grid: {type:"flash.geom.Rectangle", declaredBy:"flash.display.DisplayObject"},
				scaleX: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				scaleY: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				scaleZ: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				scrollRect: {type:"flash.geom.Rectangle", declaredBy:"flash.display.DisplayObject"},
				stage: {type:"flash.display.Stage", declaredBy:"flash.display.DisplayObject"},
				transform: {type:"flash.geom.Transform", declaredBy:"flash.display.DisplayObject"},
				visible: {type:"Boolean", declaredBy:"flash.display.DisplayObject"},
				width: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				x: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				y: {type:"Number", declaredBy:"flash.display.DisplayObject"},
				z: {type:"Number", declaredBy:"flash.display.DisplayObject"}
			},
			methods: {
				getBounds: {
					declaredBy: "flash.display.DisplayObject",
					returnType: "flash.geom.Rectangle", 
					parameters: [
						{type:"flash.display.DisplayObject", optional:false}
					]
				},
				getRect: {
					declaredBy: "flash.display.DisplayObject", 
					returnType: "flash.geom.Rectangle", 
					parameters: [
						{type:"flash.display.DisplayObject", optional:false}
					]
				},
				globalToLocal: {
					declaredBy: "flash.display.DisplayObject", 
					returnType: "flash.geom.Point", 
					parameters: [
						{type:"flash.geom.Point", optional:false}
					]
				},
				globalToLocal3D: {
					declaredBy: "flash.display.DisplayObject", 
					returnType: "flash.geom.Vector3D", 
					parameters: [
						{type:"flash.geom.Point", optional:false}
					]
				},
				hitTestObject: {
					declaredBy: "flash.display.DisplayObject", 
					returnType: "Boolean", 
					parameters: [
						{type:"flash.display.DisplayObject", optional:false}
					]
				},
				hitTestPoint: {
					declaredBy: "flash.display.DisplayObject",
					returnType: "Boolean", 
					parameters: [
						{type:"Number", optional:false},
						{type:"Number", optional:false},
						{type:"Boolean", optional:true}
					]
				},
				local3DToGlobal: {
					declaredBy: "flash.display.DisplayObject",
					returnType: "flash.geom.Point", 
					parameters: [
						{type:"flash.geom.Vector3D", optional:false}
					]
				},
				localToGlobal: {
					declaredBy: "flash.display.DisplayObject",
					returnType: "flash.geom.Point", 
					parameters: [
						{type:"flash.geom.Point", optional:false}
					]
				}
			}
		}
	},
	properties: {
		lock: true
	}
});