var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getQualifiedClassName = function(instance) {
	return instance.reflection.namespace.toString();
};
avm.addDefinition(new FlashJSNamespace('flash', 'utils', 'getQualifiedClassName'), flash.utils.getQualifiedClassName);