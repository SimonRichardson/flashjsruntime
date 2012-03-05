var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.clearInterval = function(id) {
	clearInterval(id);
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'clearInterval'), flash.utils.clearInterval);