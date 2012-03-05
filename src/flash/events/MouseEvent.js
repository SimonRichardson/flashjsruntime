var flash = flash || {};
flash.events = flash.events || {};
flash.events.MouseEvent = flash.events.Event.extend({
	constructor: function(type, bubbles, cancelable) {
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		this.base();
		
		this._.altKey = false;
		this._.buttonDown = false;
		this._.clickCount = 0;
		this._.commandKey = false;
		this._.controlKey = false;
		this._.ctrlKey = false;
		this._.delta = 0;
		this._.isRelatedObjectInaccessible = false;
		this._.localX = 0;
		this._.localY = 0;
		this._.relatedObject = null;
		this._.shiftKey = false;
		this._.stageX = 0;
		this._.stageY = 0;
		
		this.define('altKey', {
			get: function(){}
		});
		this.define('buttonDown', {
			get: function(){}
		});
		this.define('clickCount', {
			get: function(){}
		});
		this.define('commandKey', {
			get: function(){}
		});
		this.define('controlKey', {
			get: function(){}
		});
		this.define('ctrlKey', {
			get: function(){}
		});
		this.define('delta', {
			get: function(){}
		});
		this.define('isRelatedObjectInaccessible', {
			get: function(){}
		});
		this.define('localX', {
			get: function(){}
		});
		this.define('localY', {
			get: function(){}
		});
		this.define('relatedObject', {
			get: function(){},
			set: function(value){}
		});
		this.define('shiftKey', {
			get: function(){},
			set: function(value){}
		});
		this.define('stageX', {
			get: function(){ return RemedyAVM.stage.mouseX; }
		});
		this.define('stageY', {
			get: function(){ return RemedyAVM.stage.mouseY; }
		});
	},
	clone: function(){
		return new MouseEvent(this.get('type'), this.get('bubbles'), this.get('cancelable'), 
								this.get('localX'), this.get('localY'), 
								this.get('relatedObject'), 
								this.get('ctrlKey'), this.get('altKey'), this.get('shiftKey'), 
								this.get('buttonDown'), this.get('delta'));
	},
	updateAfterEvent: function(){
		RemedyAVM.stage.invalidate();
	},
	toString: function() {
		return this.formatToString("MouseEvent", "type", "bubbles", "cancelable",
			      "localX", "localY", "relatedObject", "ctrlKey", "altKey", "shiftKey", "buttonDown", "delta");
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'events', 'MouseEvent')
	},
	CLICK : "click",
	CONTEXT_MENU : "contextMenu",
	DOUBLE_CLICK : "doubleClick",
	MIDDLE_CLICK : "middleClick",
	MIDDLE_MOUSE_DOWN : "middleMouseDown",
	MIDDLE_MOUSE_UP : "middleMouseUp",
	MOUSE_DOWN : "mouseDown",
	MOUSE_MOVE : "mouseMove",
	MOUSE_OUT : "mouseOut",
	MOUSE_OVER : "mouseOver",
	MOUSE_UP : "mouseUp",
	MOUSE_WHEEL : "mouseWheel",
	RIGHT_CLICK : "rightClick",
	RIGHT_MOUSE_DOWN : "rightMouseDown",
	RIGHT_MOUSE_UP : "rightMouseUp",
	ROLL_OUT : "rollOut",
	ROLL_OVER : "rollOver"
});