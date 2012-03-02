var RemedyAVM = RemedyBase.extend({
	constructor: function(){
		this.base();
		this._.root = null;
		this._.bootTime = new Date().getTime();
		this._.instances = 0;
		this._.renderer = RemedyAVM.renderer;
		
		var scope = this;
		
		this.define('bootTime', {
			get: function(){
				return scope._.bootTime;
			}
		});
		this.define('renderer', {
			get: function(){
				return scope._.renderer;
			}
		});
	},
	boot: function(klass){
		if(!this._.renderer.get('isRunning')){
			this._.renderer.start();
		}
		this._.root = new (klass)();
	},
	incrementInstances: function(){
		return this._.instances++;
	}
}, {
	init: function(klass) {
		klass.renderer = new render.RemedyCanvas();
	},
	definitions: {},
	addStaticDefinition: function(qname, klass){
		if(qname instanceof RemedyNamespace) {
			qname = qname.getQualifiedName();
		}
		trace(qname);
		RemedyAVM.definitions[qname] = klass;
	},
	hasStaticDefinition: function(qname){
		return RemedyAVM.definitions[qname];
	},
	getStaticDefinition: function(qname){
		return RemedyAVM.definitions[qname];
	},
	getRenderer: function(){
		return RemedyAVM.renderer;
	}
});