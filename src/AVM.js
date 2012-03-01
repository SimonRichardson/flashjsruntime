var AVM = FlashJSBase.extend({
	constructor: function(){
		this.base();
		this._.bootTime = new Date().getTime();
		this._.definitions = {};
		
		this.define('bootTime', {
			get: function(){
				return this._.bootTime;
			}
		});
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