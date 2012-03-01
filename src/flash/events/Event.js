var flash = flash || {};
flash.events = flash.events || {};
flash.events.Event = FlashJSBase.extend({
	constructor: function(type, bubbles, cancelable) {
		this.base();
		
		this._.target = null;
		this._.currentTarget = null;
		this._.preventDefault = false;
		this._.stopPropagation = false;
		this._.stopImmediatePropagation = false;
		
		this.define("target", {
			get: function() {
				return this._.target;
			}
		});
		this.define("currentTarget", {
			get: function() {
				return this._.currentTarget;
			}
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
		return new Event(this.type, this.bubbles, this.cancelable);
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'events', 'Event')
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