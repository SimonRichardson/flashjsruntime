var AVM = FlashJSBase.extend({
	constructor: function(){
		this.base();
		this._.bootTime = new Date().getTime();
		this._.instances = 0;
		this._.definitions = {};
		this._.renderer = new render.FlashJSCanvas();
		
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
	incrementInstances: function(){
		return this._.instances++;
	},
	addDefinition: function(qname, klass){
		if(qname instanceof FlashJSNamespace) {
			qname = qname.getQualifiedName();
		}
		trace(qname);
		this._.definitions[qname] = klass;
	},
	hasDefinition: function(qname){
		return this._.definitions[qname];
	},
	getDefinition: function(qname){
		return this._.definitions[qname];
	}
});
// Auto boot the avm
window.avm = new AVM();