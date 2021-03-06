var flash = flash || {};
flash.display = flash.display || {};
flash.display.InteractiveObject = flash.display.DisplayObject.extend({
	constructor: function(){
		this.base();
		
		this._.accessibilityImplementation = null;
		this._.contextMenu = null;
		this._.doubleClickEnabled = false;
		this._.focusRect = null;
		this._.mouseEnabled = true;
		this._.needsSoftKeyboard = false;
		this._.softKeyboardInputAreaOfInterest = null;
		this._.tabEnabled = true;
		this._.tabIndex = -1;
		
		this.define('accessibilityImplementation', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('contextMenu', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('doubleClickEnabled', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('focusRect', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('mouseEnabled', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('needsSoftKeyboard', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('softKeyboardInputAreaOfInterest', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('tabEnabled', {
			get: function(){ },
			set: function(value) { }
		});
		this.define('tabIndex', {
			get: function(){ },
			set: function(value) { }
		});
	},
	requestSoftKeyboard: function(){
		return false;
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'display', 'InteractiveObject'),
		metadata: {
			accessors: {
				accessibilityImplementation: {type: "flash.accessibility.AccessibilityImplementatio", declaredBy:"flash.display.InteractiveObject"},
				contextMenu: {type: "flash.display.NativeMenu", declaredBy:"flash.display.InteractiveObject"},
				doubleClickEnabled: {type: "Boolean", declaredBy:"flash.display.InteractiveObject"},
				focusRect: {type: "flash.geom.Rectangle", declaredBy:"flash.display.InteractiveObject"},
				mouseEnabled: {type: "Boolean", declaredBy:"flash.display.InteractiveObject"},
				needsSoftKeyboard: {type: "Boolean", declaredBy:"flash.display.InteractiveObject"},
				softKeyboardInputAreaOfInterest: {type: "flash.geom.Rectangle", declaredBy:"flash.display.InteractiveObject"},
				tabEnabled: {type: "Boolean", declaredBy:"flash.display.InteractiveObject"},
				tabIndex: {type: "int", declaredBy:"flash.display.InteractiveObject"}
			}
		}
	}
});