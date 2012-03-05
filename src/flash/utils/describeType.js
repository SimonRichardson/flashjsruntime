var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.__describeTypeCache__ = {};
flash.utils.describeType = function(value) {
	if(flash.utils.__describeTypeCache__[value]) {
		return flash.utils.__describeTypeCache__[value];
	} else {
		var isClass = typeof value === "function";
		var reflection = value.reflection;
		var namespace = reflection.namespace;
		var namespaces = reflection.namespaces;
		var metadata = reflection.metadata;
		
		var xml = "";
		if(reflection && namespace) {
			var ancestor = value.reflection.ancestor;
			var ancestorNamespace = ancestor.reflection.namespace;
			var ancestorName = ancestorNamespace.toString();
			
			var isDynamic = isClass ? true : metadata.isDynamic; // need to work this out
			var isFinal = isClass ? true : metadata.isFinal; // need to work this out
			var isStatic = isClass ? true : metadata.isStatic; // need to work this out
			
			xml += "<type name=\"" + namespace.toString() + "\" base=\"" + ((isClass) ? "Class" : ancestorName) + "\"" +
					" isDynamic=\"" + isDynamic + "\" isFinal=\"" + isFinal + "\" isStatic=\"" + isStatic + "\">\n";
			
			if(isClass) {
				xml += "\t<extendsClass type=\"Class\"/>\n";
				xml += "\t<extendsClass type=\"Object\"/>\n";
				xml += "\t<accessor name=\"prototype\" access=\"readonly\" type=\"*\" declaredBy=\"Class\"/>\n";
				xml += "\t<factory type=\"" + namespace.toString() + "\">\n";
			}
			
			var indent = isClass ? "\t\t" : "\t";
			
			var interfaceXML = "";
			var index = namespaces.length;
			while(--index > -1) {
				var namespace = namespaces[index];
				var definition = flash.utils.getDefinitionByName(namespace.getQualifiedName());
				if(definition.reflection && definition.reflection.metadata && definition.reflection.metadata.isInterface) {
					interfaceXML += indent + "<implementsInterface type=\"" + namespace.toString() +"\"/>\n";
				} else {
					xml += indent + "<extendsClass type=\"" + namespace.toString() + "\"/>\n";
				}
			}
			xml += interfaceXML;
			
			// how do I get the get/set cache
			for(var i in value){
				trace(i);
			}
			for(var i in value.prototype){
				trace(i);
			}
			
			if(isClass) {
				xml += "\t<factory/>\n";
			}
					
			xml += "</type>";
		} else {
			throw new Error();
		}
		return xml;
	}
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'describeType'), flash.utils.describeType);