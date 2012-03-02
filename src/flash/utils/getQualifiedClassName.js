var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getQualifiedClassName = function(instance) {
	return instance.reflection.namespace.toString();
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'getQualifiedClassName'), flash.utils.getQualifiedClassName);