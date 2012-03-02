var flash = flash || {};
flash.display = flash.display || {};
flash.display.DisplayObjectContainer = flash.display.DisplayObject.extend({
	constructor: function(){
		this.base();
		
		var scope = this;
		
		this._.children = [];
		
		this.define('mouseChildren', {
			get: function(){ return null; },
			set: function(value){
			}
		});
		this.define('tabChildren', {
			get: function(){ return null; },
			set: function(value){
			}
		});
		this.define('numChildren', {
			get: function(){ return scope._.children.length; }
		});
		this.define('textSnapshot', {
			get: function(){ return null; }
		});
	},
	dispatchEvent: function(event) {
		event._.setTargets(this);
		
		this.base(event);
		
		if(event.get('bubbles') && this.get('parent')) {
			// We're going to assume that it's a IEventDispatcher?
			this.get('parent').dispatchEvent(event);
		}
	},
	addChild: function(child) {
		return this.addChildAt(child, this.get('numChildren'));
	},
	addChildAt: function(child, index) {
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(index < 0 || index > this.get('numChildren')) 
			throw new RangeError('The supplied index is out of bounds.', 2006);
		
		// We need to re-parent it!
		var childParent = child.get('parent');
		if(childParent && childParent !== this) {
			childParent.removeChild(child);
		}
		
		if(index === this.get('numChildren')) {
			this._.children.push(child);
		} else {
			this._.children.splice(child, index);
		}
		
		child._.parent = this;
		 
		var event = new flash.events.Event(flash.events.Event.ADDED, true);
		event._.setTargets(child, child);
		child.dispatchEvent(event);
		
		if(this.get('stage')) {
			event = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE, true);
			event._.setTargets(child, child);
			child.dispatchEvent(event);
		}
		
		return child;
	},
	contains: function(child) {
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(child.get('parent') !== this) 
			throw new ArgumentError('The supplied DisplayObject must be a child of the caller.', 2025);
		
		var total = this.get('numChildren');
		for(var i=0; i<total; i++) {
			if(this.getChildAt(i) === child) {
				return true;
			}
		}
		return false;
	},
	getChildAt: function(index) {
		if(arguments.length < 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/getChildAt().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(index < 0 || index > this.get('numChildren')) 
			throw new RangeError('The supplied index is out of bounds.', 2006);
		
		return this._.children[index];
	},
	getChildByName: function(name) {
		if(arguments.length < 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/getChildByName().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		
		var total = this.get('numChildren');
		for(var i=0; i<total; i++) {
			var child = this.getChildAt(i);
			if(child.name === name) {
				return child;
			}
		}
		return null;
	},
	getChildIndex: function(child) {
		if(arguments.length < 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/getChildIndex().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(child.get('parent') !== this) 
			throw new ArgumentError('The supplied DisplayObject must be a child of the caller.', 2025);
		
		var total = this.get('numChildren');
		for(var i=0; i<total; i++) {
			if(this.getChildAt(i) === child) {
				return i;
			}
		}
		return -1;
	},
	removeChild: function(child) {
		if(arguments.length < 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/removeChild().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(child.get('parent') !== this) 
			throw new ArgumentError('The supplied DisplayObject must be a child of the caller.', 2025);
		
		return this.removeChildAt(this.getChildIndex(child));
	},
	removeChildAt: function(index) {
		if(arguments.length < 1) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/removeChildAt().' +
									'Expected 1, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(index < 0 || index > this.get('numChildren')) 
			throw new RangeError('The supplied index is out of bounds.', 2006);
		
		var child = this._.children.splice(index, 1)[0];
		child._.parent = null;
		child._.root = null;
		child._.stage = null;
				
		var event = new flash.events.Event(flash.events.Event.REMOVED, true);
		event._.setTargets(child, child);
		child.dispatchEvent(event);
		
		if(this.get('stage')) {
			event = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE, true);
			event._.setTargets(child, child);
			this.dispatchEvent(event);
		}
	},
	setChildIndex: function(child, index) {
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/setChildIndex().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null === child) 
			throw new TypeError('Parameter type must be non-null.', 2007);
		if(index < 0 || index > this.get('numChildren')) 
			throw new RangeError('The supplied index is out of bounds.', 2006);
		if(child.get('parent') !== this) 
			throw new ArgumentError('The supplied DisplayObject must be a child of the caller.', 2025);
		
		this.swapChildrenAt(this.getChildIndex(child), index);
	},
	swapChildren: function(child1, child2) {
		if(arguments.length < 2) {
			throw new ArgumentError('Argument count mismatch on ' + 
									this.reflection.namespace.getFullPath() + '/setChildIndex().' +
									'Expected 2, got ' + arguments.length + '.', 1063);
		}
		if(null === child1) throw new TypeError('Parameter type must be non-null.', 2007);
		if(child1.get('parent') !== this || child2.get('parent') !== this) 
			throw new ArgumentError('The supplied DisplayObject must be a child of the caller.', 2025);
		
		this.swapChildrenAt(this.getChildIndex(child1), this.getChildIndex(child2));
	},
	swapChildrenAt: function(index1, index2) {
		if(index1 < 0 || index1 > this.get('numChildren') || index2 < 0 || index2 > this.get('numChildren')) 
			throw new RangeError('The supplied index is out of bounds.', 2006);
		
		var tmp = this._.children[index2];
		this._.children[index2] = this._.children[index1];
		this._.children[index1] = tmp;
	},
	getObjectsUnderPoint: function(point) {
		var result = [];
		
		var total = this.get('numChildren');
		for(var i=0; i<total; i++) {
			var child = this.getChildAt(i);
			if(child.getRect(this).contains(point)) {
				result.push(child);
			}
		}
		
		return result;
	},
	areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'display', 'DisplayObjectContainer')
	}
});