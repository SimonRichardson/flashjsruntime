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
			
			var instance = isClass ? value.prototype : value;
			var readAccessor = instance.reflection.readAccessor;
			var writeAccessor = instance.reflection.writeAccessor;
			for(var i in readAccessor) {
				var name = i;
				var access = i in writeAccessor ? "readwrite" : "read";
				var meta = metadata.accessors[name];
				var type = meta ? meta.type : "Object";
				var declaredBy = meta ? meta.declaredBy : "Object";
				xml += indent + "<accessor name=\"" + name + "\" access=\"" + access + "\" type=\"" + type + "\" declaredBy=\"" + declaredBy + "\"/>\n";
			}
			
			for(var i in writeAccessor) {
				if(!(i in readAccessor)) {
					var name = i;
					var access = "write";
					var meta = metadata.accessors[name];
					var type = meta ? meta.type : "Object";
					var declaredBy = meta ? meta.declaredBy : "Object";
					
					xml += indent + "<accessor name=\"" + name + "\" access=\"" + access + "\" type=\"" + type + "\" declaredBy=\"" + declaredBy + "\"/>\n";
				}
			}
			
			var methods = metadata.methods;
			for(var i in instance) {
				if(i in methods && (i !== "constructor" && i !== "toString")) {
					var method = methods[i];
					
					var name = i;
					var declaredBy = method.declaredBy;
					var returnType = method.returnType;
					
					xml += indent + "<method name=\"" + name + "\" declaredBy=\"" + declaredBy + "\" returnType=\"" + returnType + "\"";
					if(method.parameters && method.parameters.length > 0) {
						xml += ">\n";
						
						for(var j=0; j<method.parameters.length; j++) {
							var parameter = method.parameters[j];
							var type = parameter.type;
							var optional = parameter.optional;
							
							xml += (indent + '\t') + "<parameter index=\"" + (j + 1) + "\" type=\"" + type + "\" optional=\"" + optional + "\"/>\n";
						}
						
						xml += indent + "</method>\n";
					} else {
						xml += " />\n";
					}
				}
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