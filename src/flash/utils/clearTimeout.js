var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.clearTimeout = function(id) {
	clearTimeout(id);
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'clearTimeout'), flash.utils.clearTimeout);