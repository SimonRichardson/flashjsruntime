var flash = flash || {};
flash.events = flash.events || {};
flash.events.Event = RemedyBase.extend({
	constructor: function(type, bubbles, cancelable) {
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		this.base();
		
		bubbles = !bubbles ? false : true;
		cancelable = !cancelable ? false : true;
		
		var scope = this;
		
		this._.target = null;
		this._.currentTarget = null;
		this._.preventDefault = false;
		this._.stopPropagation = false;
		this._.stopImmediatePropagation = false;
		
		this._.eventPhase = flash.events.EventPhase.AT_TARGET;
		
		this._.setTargets = function(currentTarget, target){
			scope._.currentTarget = currentTarget;
			if(target) { scope._.target = target; }
		};
		
		this._.isPropagationStopped = function() {
			return scope._.stopPropagation;
		};
		this._.isImmediatePropagationStopped = function() {
			return scope._.stopImmediatePropagation;
		};
		
		this.define("target", {
			get: function() { return scope._.target; }
		});
		this.define("currentTarget", {
			get: function() { return scope._.currentTarget; }
		});
		this.define("eventPhase", {
			get: function() { return scope._.eventPhase; }
		});
		
		this.define("type", {
			get: function() {
				return type;
			}
		});
		this.define("bubbles", {
			get: function() {
				return bubbles;
			}
		});
		this.define("cancelable", {
			get: function() {
				return cancelable;
			}
		});
	},
	isDefaultPrevented: function() {
		return this._.preventDefault == true;
	},
	preventDefault: function() {
		this._.preventDefault;
	},
	stopImmediatePropagation: function() {
		this._.stopImmediatePropagation = true;
	},
	stopPropagation: function() {
		this._.stopPropagation = true;
	},
	clone: function() {
		return new Event(this.get('type'), this.get('bubbles'), this.get('cancelable'));
	}, 
	formatToString: function(name) {
		var str = '[' + name;
		
		var total = arguments.length;
		if(total > 1) {
			str += " ";
			for(var i=1; i<total; i++) {
				var argName = arguments[i];
				var arg = this.get(argName);
				
				str += argName + "=" + ((typeof arg === "string") ? '"' + arg + '"' : arg);
				if(i < total - 1) str += " ";
			}
		}
		
		return str + ']';
	},
	toString: function() {
		return this.formatToString('Event', 'type', 'bubbles', 'cancelable', 'eventPhase');
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'events', 'Event')
	},
	ACTIVATE : "activate",
	ADDED : "added",
	ADDED_TO_STAGE : "addedToStage",
	CANCEL : "cancel",
	CHANGE : "change",
	CLEAR : "clear",
	CLOSE : "close",
	COMPLETE : "complete",
	CONNECT : "connect",
	COPY : "copy",
	CUT : "cut",
	DEACTIVATE : "deactivate",
	ENTER_FRAME : "enterFrame",
	FRAME_CONSTRUCTED : "frameConstructed",
	EXIT_FRAME : "exitFrame",
	ID3 : "id3",
	INIT : "init",
	MOUSE_LEAVE : "mouseLeave",
	OPEN : "open",
	PASTE : "paste",
	REMOVED : "removed",
	REMOVED_FROM_STAGE : "removedFromStage",
	RENDER : "render",
	RESIZE : "resize",
	SCROLL : "scroll",
	TEXT_INTERACTION_MODE_CHANGE : "textInteractionModeChange",
	SELECT : "select",
	SELECT_ALL : "selectAll",
	SOUND_COMPLETE : "soundComplete",
	TAB_CHILDREN_CHANGE : "tabChildrenChange",
	TAB_ENABLED_CHANGE : "tabEnabledChange",
	TAB_INDEX_CHANGE : "tabIndexChange",
	UNLOAD : "unload",
	FULLSCREEN : "fullScreen",
	CLOSING : "closing",
	EXITING : "exiting",
	DISPLAYING : "displaying",
	PREPARING : "preparing",
	NETWORK_CHANGE : "networkChange",
	USER_IDLE : "userIdle",
	USER_PRESENT : "userPresent",
	STANDARD_OUTPUT_CLOSE : "standardOutputClose",
	STANDARD_ERROR_CLOSE : "standardErrorClose",
	STANDARD_INPUT_CLOSE : "standardInputClose",
	HTML_BOUNDS_CHANGE : "htmlBoundsChange",
	HTML_RENDER : "htmlRender",
	HTML_DOM_INITIALIZE : "htmlDOMInitialize",
	LOCATION_CHANGE : "locationChange"
});