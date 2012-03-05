var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.setInterval = function(id) {
	setInterval(id);
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'setInterval'), flash.utils.setInterval);