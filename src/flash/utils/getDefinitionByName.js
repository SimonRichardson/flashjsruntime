var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getDefinitionByName = function(qname) {
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
		return (typeof result == "function")? result : null;
	}
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'getDefinitionByName'), flash.utils.getDefinitionByName);