var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getDefinitionByName = function(qname) {
	if(avm.hasDefinition(qname)) {
		return avm.getDefinition(qname);
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
avm.addDefinition(new FlashJSNamespace('flash', 'utils', 'getDefinitionByName'), flash.utils.getDefinitionByName);