var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.Timer = flash.events.EventDispatcher.extend({
	constructor: function(delay, repeatCount){
		if(repeatCount < 0 || repeatCount == Infinity || repeatCount == -Infinity) {
			throw new RangeError("", 2066);
		}
		
		this.base();
		
		this._.delay = delay;
		this._.repeatCount = repeatCount == undefined ? 0 : repeatCount;
		this._.iteration = 0;
		this._.running = false;
		this._.interval = -1;
		
		var scope = this;
		this._.tick = function() {
			scope._.iteration++;
			scope.dispatchEvent(new flash.events.TimerEvent(flash.events.TimerEvent.TIMER, false, false));
		    if (scope._.repeatCount != 0 && scope._.iteration >= scope._.repeatCount){
		    	scope.stop();
		    	scope.dispatchEvent(new flash.events.TimerEvent(flash.events.TimerEvent.TIMER_COMPLETE, false, false));
		    } else {
		    	scope._.interval = setTimeout(scope._.tick, scope._.delay);
		    }
		};
		
		this.define('delay', {
			get: function() {
				return this._.delay;
			},
			set: function(value) {
				if (value < 0 || value == Infinity || value == -Infinity){
					throw new RangeError("", 2066);
			    }
			    this._.delay = value;
			    if (this.get('running')){
			        this.stop();
			        this.start();
			    }
			}
		});
		this.define('repeatCount', {
			get: function() {
				return this._.repeatCount;
			},
			set: function(value) {
				this._.repeatCount = value;
			    if (this.running || this.m_repeatCount != 0 || this.m_iteration >= this.m_repeatCount){
			        this.stop();
			    }
			}
		});
		this.define('currentCount', {
			get: function() {
				return this._.iteration;
			}
		});
		this.define('running', {
			get: function() {
				return this._.running;
			}
		});
	},
	start: function() {
		if (!this.get('running')){
			this._.running = true;
        	this._.interval = setTimeout(this._.tick, this._.delay);
    	}
	},
	stop: function(){
		if(this.get('running')) {
			this._.running = false;
			clearTimeout(this._.interval);
		}
	},
	reset: function() {
	    if (this.get('running')){
	        this.stop();
	    }
	    this._.iteration = 0;
	}
}, {
	reflection: {
		namespace: new FlashJSNamespace('flash', 'utils', 'Timer')
	}
});