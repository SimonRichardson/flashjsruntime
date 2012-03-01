var flash = flash || {};
flash.utils = flash.utils || {};
flash.utils.getTimer = function() {
	return new Date().getTime() - avm.get('bootTime');
};
avm.addDefinition(new FlashJSNamespace('flash', 'utils', 'getTimer'), flash.utils.getTimer);