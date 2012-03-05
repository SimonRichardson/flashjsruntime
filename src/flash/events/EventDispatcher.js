var flash = flash || {};
flash.events = flash.events || {};
flash.events.EventDispatcher = RemedyBase.extend({
	constructor: function(target) {
		this.base();
		this._.target = target;
		this._.listeners = {};
		this._.captureListeners = {};
		this._.dispatching = false;
		
		var scope = this;
		
		this._.createAncestorChain = function() {
			return null;
		};
		
		this._.handleCapture = function(event, ancestors){
			if(!ancestors || ancestors.length <= 0) {
				return;
			}
			
			var index = ancestors.length;
			while(--index > -1) {
				var dispatcher = ancestors[index];
				dispatcher._.processCapture(event);
				if(event._.isPropagationStopped()) {
					break;
				}
			}
		};
		this._.processCapture = function(event){
			event._.setTargets(scope._.target || scope);
			
			var list = scope._.captureListeners[event.get('type')];
			if(list) {
				scope._.processListeners(event, list);
			}
		};
		
		this._.handleBubble = function(event, ancestors){
			if(!ancestors || ancestors.length <= 0) {
				return;
			}
			
			var index = ancestors.length;
			while(--index > -1) {
				var dispatcher = ancestors[index];
				dispatcher._.processBubble(event);
				if(event._.isPropagationStopped()) {
					break;
				}
			}
		};
		this._.processBubble = function(event){
			event._.setTargets(scope._.target || scope);
			
			var list = scope._.listeners[event.get('type')];
			if(list) {
				scope._.processListeners(event, list);
			}
		};
		
		this._.processListeners = function(event, list){
			var total = list.length;
			for(var i = 0; i<total; i++) {
				if(list[i].method(event) === false) {
					event.stopPropagation();
					event.preventDefault();
				}
				if(event._.isImmediatePropagationStopped()) {
					break;
				}
			}
		};
	},
	addEventListener: function(type, listener, useCapture, priority, useWeakReference) {
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/addEventListener().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		if(null == listener) throw new TypeError('Parameter listener must be non-null.', 2007);
		
		var listType = useCapture ? this._.captureListeners : this._.listeners;
		var list = (type in listType) ? listType : [];
		
		var eventListener = new flash.events.EventDispatcher.EventListener(type, listener, useCapture, priority);
		if(listener.__bind__) {
			eventListener.listener = listener.__method__;
			eventListener.method = listener;
		} else {
			eventListener.method = utils.bind(this._.target, listener);
		}
		
		list.push(eventListener);
		list.sort(flash.events.EventDispatcher.sort);
		
		listType[type] = list;
	},
	dispatchEvent: function(event){
		this._.dispatching = true;
		
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/dispatchEvent().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == event) throw new TypeError('Cannot access a property or method of a ' + 
											  'null object reference.', 1009);
		
		var ancestors = this._.createAncestorChain();
		
		event._.eventPhase = flash.events.EventPhase.CAPTURING_PHASE;
		this._.handleCapture(event, ancestors);
		
		if(!event._.isPropagationStopped()){
			event._.eventPhase = flash.events.EventPhase.AT_TARGET;
			var list = this._.listeners[event.get('type')];
			
			if(list) {
				this._.processListeners(event, list);
			}
		}
		
		if(!event._.isPropagationStopped()) {
			event._.eventPhase = flash.events.EventPhase.BUBBLING_PHASE;
			this._.handleBubble(event, ancestors);
		}
		
		this._.dispatching = false;
		
		return !event.isDefaultPrevented();
	},
	hasEventListener: function(type){
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/hasEventListener().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		return this._.listeners[type] || this._.captureListeners[type];
	},
	removeEventListener: function(type, listener, useCapture){
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/removeEventListener().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		if(null == listener) throw new TypeError('Parameter listener must be non-null.', 2007);
		
		useCapture = useCapture ? true : false;
		
		var list = useCapture ? this._.captureListeners : this._.listeners;
				
		var index = list.length;
		while(--index > -1) {
			var eventListener = list[index];
			if(eventListener.listener === listener) {
				list.splice(index, 1);
			}
		}
	},
	willTrigger: function(type){
		if(arguments.length != 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/willTrigger().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null == type) throw new TypeError('Parameter type must be non-null.', 2007);
		
		var ancestor = this.reflection.ancestor.prototype;
		if(is(ancestor, flash.events.IEventDispatcher)) {
			return ancestor.willTrigger(type);
		}
		
		return hasEventListener(type);
	}
}, {
	reflection: {
		namespace: new RemedyNamespace('flash', 'events', 'EventDispatcher')
	},
	init: function(klass) {
		klass.sort = function(a, b){
			return a.priority - b.priority;
		};
		klass.EventListener = function(type, listener, useCapture, priority) {
			this.type = type;
			this.listener = listener;
			this.useCapture = useCapture;
			this.priority = priority;
			this.method = null;
		};
	}
});
flash.events.EventDispatcher.implement(flash.events.IEventDispatcher);
