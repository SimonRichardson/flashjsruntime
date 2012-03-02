var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getTimer = function() {
	return new Date().getTime() - avm.get('bootTime');
};
RemedyAVM.addStaticDefinition(new RemedyNamespace('flash', 'utils', 'getTimer'), flash.utils.getTimer);