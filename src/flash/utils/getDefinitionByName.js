var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getDefinitionByName = function(qname) {
	if(/::/.test(qname)) {
		qname = qname.replace(/::/, '.');
	}
	
	if(RemedyAVM.hasStaticDefinition(qname)) {
		return RemedyAVM.getStaticDefinition(qname);
	} else {
		// Brute force!
		var parts = qname.split(".");
		var total = parts.length;
		var result = window;
		for(var i=0; i<total; i++) {
			result = result[parts[i]];
		}
		// Now cache it for later.
		var klass = (typeof result == "function")? result : null;
		if(klass) {
			RemedyAVM.addStaticDefinition(qname, klass);
		}
		return klass;
	}
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'getDefinitionByName'), flash.utils.getDefinitionByName);