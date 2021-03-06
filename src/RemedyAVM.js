var RemedyAVM = RemedyBase.extend({
	constructor: function(){
		this.base();
		
		this._.root = null;
		
		var stage = flash.display.Stage.create();
		
		this._.stage = stage;
		this._.stage.name = null;
		
		RemedyAVM.stage = stage;
		
		this._.bootTime = new Date().getTime();
		this._.renderer = RemedyAVM.renderer;
		
		var scope = this;
		
		this.define('bootTime', {
			get: function(){
				return scope._.bootTime;
			}
		});
		this.define('renderer', {
			get: function(){ return scope._.renderer; },
			set: function(value){ 
				scope._.renderer = value;
				RemedyAVM.renderer = value;
				scope._.stage.invalidate();
			}
		});
	},
	boot: function(klass){
		if(!this._.renderer.get('isRunning')){
			this._.renderer.start();
		}
		
		var root = new (klass)();
		root.set('name', 'root1'); // TODO : fix this magic string
		
		this._.root = root;
		
		var event = new flash.events.Event(flash.events.Event.ADDED, true);
		event._.setTargets(root, root);
		root.dispatchEvent(event);
		
		// add the stage (this will cause a cascade)
		root._.setRoot(root);
		root._.setStage(this._.stage, root);
	}
}, {
	init: function(klass) {
		klass.renderer = new render.RemedyCanvas();
	},
	definitions: {},
	instances: 0,
	addStaticDefinition: function(qname, klass){
		if(qname instanceof RemedyNamespace) {
			qname = qname.getQualifiedName();
		}
		RemedyAVM.definitions[qname] = klass;
	},
	hasStaticDefinition: function(qname){
		return RemedyAVM.definitions[qname];
	},
	getStaticDefinition: function(qname){
		return RemedyAVM.definitions[qname];
	},
	incrementInstances: function(){
		return RemedyAVM.instances++;
	},
	getRenderer: function(){
		return RemedyAVM.renderer;
	}
});